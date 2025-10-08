import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true,
    }
));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


// Routes
app.use("/api", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/packages", packageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
