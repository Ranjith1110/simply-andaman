import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const categories = ["Family", "Honeymoon", "Premium", "Luxury", "Best Seller"];
const initialPackageState = { title: "", location: "", desc: "", trend: false, price: "", img: "", category: "Family" };

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
      if (Array.isArray(data)) {
        setPackages(data);
      }
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
    setFormData((prevState) => ({
      ...prevState,
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
    } catch (error) {
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
    } catch (error) {
      toast.error("Failed to save package.");
    }
  };

  const filteredPackages = packages.filter((pkg) => pkg.category === activeTab);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto relative">
      <Toaster position="top-right" />

      {view === "form" && (
        <div>
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-2xl font-semibold">{editingId ? "Edit Package" : "Add New Package"}</h2>
            <button
              onClick={() => setView("list")}
              className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700"
            >← Back to List</button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Package Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea id="desc" name="desc" value={formData.desc} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-1">Image Path</label>
                <input type="text" id="img" name="img" value={formData.img} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="trend" name="trend" type="checkbox" checked={formData.trend} onChange={handleChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="trend" className="ml-2 block text-sm text-gray-900">Mark as Trending</label>
              </div>
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700">Save Package</button>
            </div>
          </form>
        </div>
      )}

      {view === "list" && (
        <div>
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-2xl font-semibold">Manage Packages</h2>
            <button onClick={handleAddNew} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700">
              + Add New Package
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="text-center text-gray-500 py-10">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-4 py-2 border">#</th>
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Price</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg, index) => (
                      <tr key={pkg._id}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2 font-medium">{pkg.title}</td>
                        <td className="border px-4 py-2">{pkg.category}</td>
                        <td className="border px-4 py-2">{pkg.price}</td>
                        <td className="border px-4 py-2 space-x-2 whitespace-nowrap">
                          <button onClick={() => handleEdit(pkg)} className="text-blue-600 hover:underline">Edit</button>
                          <button onClick={() => handleDeleteClick(pkg._id)} className="text-red-600 hover:underline">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="5" className="text-center py-4 text-gray-500">No packages found in the "{activeTab}" category.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl space-y-4 text-center">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this package? This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 font-semibold"
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