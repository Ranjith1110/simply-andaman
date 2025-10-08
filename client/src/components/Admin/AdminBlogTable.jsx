import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogContentEdit from "./BlogContentEdit";
import { Toaster, toast } from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const AdminBlogTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null);
  const [deleteBlogId, setDeleteBlogId] = useState(null);

  const fetchBlogs = () => {
    axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/blogs`).then((res) => {
      setBlogs(res.data);
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/api/blogs/${deleteBlogId}`);
      setDeleteBlogId(null);
      fetchBlogs();
      toast.success("Blog deleted successfully!");
    } catch (err) {
      console.error("Error deleting blog:", err);
      toast.error("Failed to delete blog!");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Blog Management Table", 14, 16);

    const tableColumn = ["#", "Title", "Author", "Updated"];
    const tableRows = [];

    blogs.forEach((blog, index) => {
      tableRows.push([
        index + 1,
        `${blog.title} ${blog.subtitle || ""}`,
        blog.authorName,
        new Date(blog.updatedAt).toLocaleDateString(),
      ]);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("blogs.pdf");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      blogs.map((blog, index) => ({
        "#": index + 1,
        Title: `${blog.title} ${blog.subtitle || ""}`,
        Author: blog.authorName,
        Updated: new Date(blog.updatedAt).toLocaleDateString(),
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Blogs");
    XLSX.writeFile(workbook, "blogs.xlsx");
  };

  if (editBlogId !== null)
    return (
      <>
        <BlogContentEdit
          blogId={editBlogId}
          onCancel={() => setEditBlogId(null)}
          onSave={() => {
            setEditBlogId(null);
            fetchBlogs();
            toast.success(editBlogId ? "Blog updated successfully!" : "Blog added successfully!");
          }}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
              Blog Management
            </h2>
            <p className="text-gray-500 mt-1">
              Manage, edit, and export your blogs easily.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setEditBlogId("")}
              className="bg-green-700 hover:bg-green-900 text-white px-3 py-2 rounded-lg font-medium transition-all"
            >
              + Add New Blog
            </button>
            <button
              onClick={downloadPDF}
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-lg font-medium transition-all"
            >
              Export PDF
            </button>
            <button
              onClick={downloadExcel}
              className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-2 rounded-lg font-medium transition-all"
            >
              Export Excel
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3 border-b">#</th>
                <th className="px-6 py-3 border-b">Title</th>
                <th className="px-6 py-3 border-b">Author</th>
                <th className="px-6 py-3 border-b">Updated</th>
                <th className="px-6 py-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <tr
                    key={blog._id}
                    className="hover:bg-gray-50 transition-all border-b"
                  >
                    <td className="px-6 py-3 font-medium">{index + 1}</td>
                    <td className="px-6 py-3">
                      <p className="font-semibold text-gray-900">
                        {blog.title}
                      </p>
                      <p className="text-gray-500 text-xs">{blog.subtitle}</p>
                    </td>
                    <td className="px-6 py-3">{blog.authorName}</td>
                    <td className="px-6 py-3">
                      {new Date(blog.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-3 text-center space-x-2">
                      <button
                        onClick={() => setEditBlogId(blog._id)}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => setDeleteBlogId(blog._id)}
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
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No blogs found. Click “Add New Blog” to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteBlogId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center space-y-4 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              ⚠️ Confirm Deletion
            </h3>
            <p className="text-gray-600 text-sm">
              Are you sure you want to delete this blog? This action cannot be
              undone.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setDeleteBlogId(null)}
                className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
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

export default AdminBlogTable;
