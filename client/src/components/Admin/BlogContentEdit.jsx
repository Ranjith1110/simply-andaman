import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogContentEdit = ({ blogId, onCancel, onSave }) => {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        description: "",
        authorName: "",
        authorRole: "",
        mainImage: "",
        profileImage: "",
    });

    useEffect(() => {
        if (blogId) {
            axios
                .get(`${import.meta.env.VITE_APP_BASE_URL}/api/blogs/${blogId}`)
                .then((res) => {
                    setFormData(res.data);
                });
        }
    }, [blogId]);

    const handleImageChange = (e, key) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, [key]: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSave = async () => {
        try {
            if (blogId) {
                await axios.put(
                    `${import.meta.env.VITE_APP_BASE_URL}/api/blogs/${blogId}`,
                    formData
                );
            } else {
                await axios.post(
                    `${import.meta.env.VITE_APP_BASE_URL}/api/blogs/add`,
                    formData
                );
            }
            onSave();
        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Error saving blog. Check console for details.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                        {blogId ? "Edit Blog" : "Add New Blog"}
                    </h2>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
                    >
                        ← Back
                    </button>
                </div>

                {/* Form Section */}
                <div className="space-y-8">
                    {/* Title + Subtitle */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Enter blog title..."
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold mb-1">
                                Subtitle
                            </label>
                            <input
                                type="text"
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleInputChange}
                                placeholder="Enter subtitle..."
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-gray-700 font-semibold mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="5"
                            placeholder="Write your blog content here..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Author Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-gray-700 font-semibold mb-1">
                                Author Name
                            </label>
                            <input
                                type="text"
                                name="authorName"
                                value={formData.authorName}
                                onChange={handleInputChange}
                                placeholder="e.g. John Doe"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 font-semibold mb-1">
                                Author Role
                            </label>
                            <input
                                type="text"
                                name="authorRole"
                                value={formData.authorRole}
                                onChange={handleInputChange}
                                placeholder="e.g. Travel Blogger"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Main Image */}
                        <div>
                            <label className="text-gray-700 font-semibold mb-2 block">
                                Main Image
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "mainImage")}
                                    className="w-full text-sm text-gray-500"
                                />
                                {formData.mainImage && (
                                    <img
                                        src={formData.mainImage}
                                        alt="Main"
                                        className="w-full h-48 object-cover rounded-lg mt-3 shadow-md"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div>
                            <label className="text-gray-700 font-semibold mb-2 block">
                                Profile Image
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, "profileImage")}
                                    className="w-full text-sm text-gray-500"
                                />
                                {formData.profileImage && (
                                    <img
                                        src={formData.profileImage}
                                        alt="Profile"
                                        className="w-24 h-24 object-cover rounded-full mx-auto mt-3 shadow-md"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-6 border-t mt-8">
                        <button
                            onClick={onCancel}
                            className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-sm transition"
                        >
                            💾 Save Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContentEdit;
