import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        subtitle: String,
        description: String,
        authorName: String,
        authorRole: String,
        mainImage: String,
        profileImage: String,
    },
    { timestamps: true } // adds createdAt and updatedAt
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
