import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Latest blog posts
          </h2>
          <p className="text-md text-gray-500">
            Explore recent stories and travel experiences.
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className={`mt-6 md:mt-0 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 whitespace-nowrap ${
            showAll
              ? "bg-gray-400 text-white hover:bg-gray-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {showAll ? "Hide" : "View all posts"}
        </button>
      </header>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {visibleBlogs.map((post) => (
            <Link
              to={`/blog/${post._id}`}
              key={post._id}
              className="relative h-96 overflow-hidden rounded-2xl shadow-xl transition duration-300 group cursor-pointer transform hover:scale-[1.02]"
            >
              <img
                src={post.mainImage || assets.Blog1}
                alt={post.title}
                className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent/50 rounded-2xl"></div>

              <div className="absolute top-5 right-5 bg-white/10 p-2 rounded-xl text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <ArrowUpRight size={24} strokeWidth={2.5} className="w-5 h-5" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestBlog;
