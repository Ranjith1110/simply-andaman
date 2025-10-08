import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const seedAdmin = async () => {
    try {
        const exists = await User.findOne({ username: "admin" });
        if (exists) {
            console.log("Admin user already exists");
            process.exit();
        }

        const admin = new User({
            username: "admin",
            email: "admin@example.com",
            password: "admin123",
        });

        await admin.save();
        console.log("Admin user created!");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();
