import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";

const BlogHero = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (id) {
          const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
          setBlog(res.data);
        } else {
          const res = await axios.get("http://localhost:5000/api/blogs");
          if (res.data.length > 0) setBlog(res.data[0]);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog)
    return <p className="text-center text-gray-500 py-20">Loading Blog...</p>;

  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src={blog.mainImage || assets.Blog}
            alt="Blog"
            className="w-full h-[600px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {blog.title}{" "}
            <span className="text-gray-500">{blog.subtitle}</span>
          </h1>
          <p className="text-gray-600 mb-6 break-words whitespace-normal">
            {blog.description}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={blog.profileImage || assets.Profile}
              alt={blog.authorName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{blog.authorName}</p>
              <p className="text-sm text-gray-500">{blog.authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
