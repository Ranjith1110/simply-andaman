import React, { useState, useEffect } from "react";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

const categories = ["Family", "Honeymoon", "Premium", "Luxury", "Best Seller"];

function TourPackages() {
  const [activeTab, setActiveTab] = useState("Family");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all packages from backend
  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/packages`
        );
        if (Array.isArray(data)) setPackages(data);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPackages();
  }, []);

  // ✅ Filter packages by selected category
  const filteredPackages = packages.filter(
    (pkg) => pkg.category === activeTab
  );

  return (
    <section className="relative w-full bg-gray-100 pt-60 md:pt-80 pb-14 transition-all duration-700">
      {/* --- Overlay / Optional static image background --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100" />

      {/* --- Section Title --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
          Andaman Tour Packages
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Romantic hideaways, family adventures, volcanic thrills,
          bioluminescent magic, luxury escapes & eco-cultural journeys – curated
          for every traveler.
        </p>
      </div>

      {/* --- Category Tabs --- */}
      <div className="relative z-10 flex justify-center mb-8 px-3">
        <div className="flex overflow-x-auto gap-2 sm:gap-4 p-1 rounded-lg border border-gray-300 bg-white/90 backdrop-blur-md scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium whitespace-nowrap rounded-lg transition-colors ${
                activeTab === cat
                  ? "bg-blue-50 text-[#1565D8]"
                  : "text-[#6B7280] hover:text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Package Grid --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-gray-700 font-semibold">
            Loading Packages...
          </p>
        ) : filteredPackages.length > 0 ? (
          filteredPackages.map((card) => (
            <PackageCard key={card._id} card={card} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700">
            No packages found for this category.
          </p>
        )}
      </div>

      {/* --- View All Button --- */}
      <div className="relative z-10 text-center mt-10">
        <button className="border border-blue-600 text-blue-600 rounded-md px-6 py-2 font-semibold hover:bg-blue-600 hover:text-white transition">
          View All
        </button>
      </div>
    </section>
  );
}

function PackageCard({ card }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col h-72 sm:h-80 md:h-96 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={card.img}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      <div className="relative z-20 flex flex-col justify-between h-full p-4 text-white">
        <div className="flex justify-between items-start">
          {card.trend && (
            <span className="bg-blue-100/90 text-blue-800 px-2 py-1 rounded-lg text-[11px] font-medium shadow-sm">
              • Trending
            </span>
          )}
          <span className="bg-yellow-50 text-yellow-700 border-yellow-200 px-3 py-1 rounded-lg text-xs font-semibold shadow-md">
            {card.price}
          </span>
        </div>

        <div className="p-2">
          <h3 className="text-lg font-bold leading-tight mb-1">
            {card.title}
          </h3>
          <p className="text-xs mb-1 opacity-90">{card.location}</p>
          <p className="text-xs opacity-85 leading-snug">{card.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TourPackages;
