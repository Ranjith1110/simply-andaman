import express from "express";
import {
    addBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/add", addBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
