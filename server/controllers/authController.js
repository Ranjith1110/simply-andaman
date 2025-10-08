import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { identifier, password } = req.body;

    try {
        // find user by username or email
        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }],
        });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // create JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
