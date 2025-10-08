import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const categories = ["Family", "Honeymoon", "Premium", "Luxury", "Best Seller"];
const initialPackageState = {
  title: "",
  location: "",
  desc: "",
  trend: false,
  price: "",
  img: "",
  category: "Family",
};

const AdminPackage = () => {
  const [view, setView] = useState("list");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(initialPackageState);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("Family");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/packages`);
      if (Array.isArray(data)) setPackages(data);
    } catch (error) {
      toast.error("Could not fetch packages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddNew = () => {
    setEditingId(null);
    setFormData(initialPackageState);
    setView("form");
  };

  const handleEdit = (pkg) => {
    setEditingId(pkg._id);
    setFormData({ ...pkg });
    setView("form");
  };

  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/api/packages/${deletingId}`);
      toast.success("Package deleted successfully!");
      fetchPackages();
    } catch {
      toast.error("Failed to delete package.");
    } finally {
      setShowDeleteModal(false);
      setDeletingId(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.category) {
      toast.error("Please fill in Title, Price, and Category.");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_APP_BASE_URL}/api/packages/${editingId}`, formData);
        toast.success("Package updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/packages`, formData);
        toast.success("Package added successfully!");
      }
      setView("list");
      fetchPackages();
    } catch {
      toast.error("Failed to save package.");
    }
  };

  const filteredPackages = packages.filter((pkg) => pkg.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-10">
      <Toaster position="top-right" />

      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-7xl mx-auto">
        {view === "form" ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {editingId ? " Edit Package" : " Add New Package"}
              </h2>
              <button
                onClick={() => setView("list")}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              >
                ← Back
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter package title"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter description..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="₹ 5000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Image URL</label>
                  <input
                    type="text"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="/images/sample.jpg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    name="trend"
                    checked={formData.trend}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  Mark as Trending
                </label>

                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  💾 Save Package
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center border-b pb-4 mb-6 gap-4">
              <h2 className="text-2xl font-semibold text-gray-800"> Manage Packages</h2>
              <button
                onClick={handleAddNew}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
              >
                + Add Package
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition ${activeTab === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Table */}
            {loading ? (
              <p className="text-center text-gray-500 py-10">Loading packages...</p>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full bg-white text-sm text-gray-700">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">#</th>
                      <th className="px-4 py-3 text-left">Title</th>
                      <th className="px-4 py-3 text-left">Category</th>
                      <th className="px-4 py-3 text-left">Price</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPackages.length ? (
                      filteredPackages.map((pkg, index) => (
                        <tr
                          key={pkg._id}
                          className="border-t hover:bg-gray-50 transition"
                        >
                          <td className="px-4 py-3">{index + 1}</td>
                          <td className="px-4 py-3 font-medium">{pkg.title}</td>
                          <td className="px-4 py-3">{pkg.category}</td>
                          <td className="px-4 py-3 font-semibold text-blue-600">
                            ₹{pkg.price}
                          </td>
                          <td className="px-4 py-3 flex flex-wrap gap-2">
                            <button
                              onClick={() => handleEdit(pkg)}
                              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                            >
                             ✏️ Edit
                            </button>
                            <button
                              onClick={() => handleDeleteClick(pkg._id)}
                              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                            >
                             🗑️ Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center py-6 text-gray-500"
                        >
                          No packages found in "{activeTab}".
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-sm text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Confirm Deletion</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Are you sure you want to delete this package? This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPackage;
