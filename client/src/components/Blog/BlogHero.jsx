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
          const res = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/blogs/${id}`);
          setBlog(res.data);
        } else {
          const res = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/blogs`);
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
    <section className="relative bg-gray-50 pb-12 pt-24 md:pt-34 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={blog.mainImage || assets.Blog}
              alt="Blog"
              className="w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}{" "}
            <span className="block text-gray-500 text-2xl sm:text-3xl">
              {blog.subtitle}
            </span>
          </h1>

          <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed break-words whitespace-normal">
            {blog.description}
          </p>

          {/* Author Section */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src={blog.profileImage || assets.Profile}
              alt={blog.authorName}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                {blog.authorName}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{blog.authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;