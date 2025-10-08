import express from "express";
import { login } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);

// Protected admin dashboard route
router.get("/admin-dashboard", protect, (req, res) => {
    res.json({ message: "Welcome to the Admin Dashboard", user: req.user });
});

export default router;
