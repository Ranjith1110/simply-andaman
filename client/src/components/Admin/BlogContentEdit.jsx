import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the base URL from the environment variable once to use throughout the component
const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

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
            // Use the API_BASE_URL variable
            axios.get(`${API_BASE_URL}/api/blogs/${blogId}`).then((res) => {
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
                // FIX: Use the API_BASE_URL variable for updating
                await axios.put(`${API_BASE_URL}/api/blogs/${blogId}`, formData);
            } else {
                // FIX: Use the API_BASE_URL variable for creating
                await axios.post(`${API_BASE_URL}/api/blogs/add`, formData);
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
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto relative">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h2 className="text-2xl font-semibold">
                    {blogId ? "Edit Blog" : "Add New Blog"}
                </h2>
                <button
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700"
                >
                    ← Back to List
                </button>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
                            Subtitle
                        </label>
                        <input
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
                            Author Name
                        </label>
                        <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            value={formData.authorName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="authorRole" className="block text-sm font-medium text-gray-700 mb-1">
                            Author Role
                        </label>
                        <input
                            type="text"
                            id="authorRole"
                            name="authorRole"
                            value={formData.authorRole}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Main Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, "mainImage")}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2"
                        />
                        {formData.mainImage && (
                            <img
                                src={formData.mainImage}
                                alt="Main Preview"
                                className="w-full h-48 object-cover rounded-lg border border-gray-200 mt-2"
                            />
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, "profileImage")}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2"
                        />
                        {formData.profileImage && (
                            <img
                                src={formData.profileImage}
                                alt="Profile Preview"
                                className="w-24 h-24 rounded-full object-cover border border-gray-200 mt-2"
                            />
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
                    >
                        Save Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogContentEdit;