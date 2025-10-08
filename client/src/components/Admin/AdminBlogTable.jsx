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
  const [deleteBlogId, setDeleteBlogId] = useState(null); // For modal

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

  // PDF Download
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

  // Excel Download
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
            toast.success(
              editBlogId ? "Blog updated successfully!" : "Blog added successfully!"
            );
          }}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto relative">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold">Blog Management</h2>
        <div className="space-x-2">
          <button
            onClick={() => setEditBlogId("")}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            + Add New Blog
          </button>
          <button
            onClick={downloadPDF}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Download PDF
          </button>
          <button
            onClick={downloadExcel}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          >
            Download Excel
          </button>
        </div>
      </div>

      <table className="min-w-full border">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Author</th>
            <th className="px-4 py-2 border">Updated</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog._id}>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{blog.title} {blog.subtitle}</td>
              <td className="px-4 py-2 border">{blog.authorName}</td>
              <td className="px-4 py-2 border">
                {new Date(blog.updatedAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border space-x-2">
                <button
                  onClick={() => setEditBlogId(blog._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteBlogId(blog._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {deleteBlogId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white text-center rounded-lg p-6 w-96 shadow-lg space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Confirm Delete
            </h3>
            <p className="text-gray-600">
              Are you sure you want to delete this blog?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteBlogId(null)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
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
