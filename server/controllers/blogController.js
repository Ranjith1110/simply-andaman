import Blog from "../models/Blog.js";

// ➕ Add new blog
export const addBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 🧾 Get all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ updatedAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🧠 Get a single blog
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✏️ Update blog
export const updateBlog = async (req, res) => {
    try {
        const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 🗑️ Delete blog
export const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
