import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ThumbsUp } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";

const spotsData = [
  { id: 1, title: "Cellular Jail", location: "Port Blair", category: "places", image: assets.Cellularjail, ticket: true, recommended: true },
  { id: 2, title: "Ross Island", location: "Port Blair", category: "places", image: assets.Rossland, ticket: true, recommended: true },
  { id: 3, title: "Jolly Buoy Island", location: "Port Blair", category: "places", image: assets.Jollybuoyisland, ticket: true, recommended: true },
  { id: 4, title: "Coral Beach", location: "Neil Island", category: "beaches", image: assets.Cellularjail, ticket: false, recommended: false },
  { id: 5, title: "Ancient Monument", location: "Heritage City", category: "monuments", image: assets.Rossland, ticket: true, recommended: false },
  { id: 6, title: "Old Lighthouse", location: "Coastal Town", category: "monuments", image: assets.Jollybuoyisland, ticket: false, recommended: true },
  { id: 7, title: "Hidden Cove", location: "Remote Bay", category: "beaches", image: assets.Cellularjail, ticket: false, recommended: false },
  { id: 8, title: "Cellular Jail", location: "Port Blair", category: "places", image: assets.Cellularjail, ticket: true, recommended: true },
  { id: 9, title: "Ross Island", location: "Port Blair", category: "places", image: assets.Rossland, ticket: true, recommended: true },
  { id: 10, title: "Old Lighthouse", location: "Coastal Town", category: "places", image: assets.Jollybuoyisland, ticket: false, recommended: true },
  { id: 11, title: "Jolly Buoy Island", location: "Port Blair", category: "beaches", image: assets.Jollybuoyisland, ticket: true, recommended: true },
  { id: 12, title: "Cellular Jail", location: "Port Blair", category: "places", image: assets.Jollybuoyisland, ticket: true, recommended: true },
  { id: 13, title: "Ross Island", location: "Port Blair", category: "places", image: assets.Rossland, ticket: true, recommended: true },
  { id: 14, title: "Jolly Buoy Island", location: "Port Blair", category: "places", image: assets.Jollybuoyisland, ticket: true, recommended: true },
  { id: 15, title: "Cellular Jail", location: "Port Blair", category: "places", image: assets.Cellularjail, ticket: true, recommended: true },
];

export default function BucketList() {
  const [activeTab, setActiveTab] = useState("places");
  const [page, setPage] = useState(0);

  const filtered = spotsData.filter((s) => s.category === activeTab);
  const perPage = 6; // show 6 items on desktop (3x2), 4 on tablet, 3 on mobile (grid handles it)
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  useEffect(() => setPage(0), [activeTab]);

  const visible = filtered.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="w-full bg-[#F9FBFE] py-16 px-4 font-[Poppins,sans-serif]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
            Bucket List Spots
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Many reasons why customers choose us over others. <br />
            We have some plus points that maybe others don’t.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex overflow-x-auto gap-2 sm:gap-4 p-1 rounded-lg border border-gray-200 bg-white shadow-sm scrollbar-hide">
            {["places", "beaches", "monuments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-10 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${activeTab === tab
                    ? "bg-blue-50 text-[#1565D8]"
                    : "text-[#6B7280] hover:text-gray-600"
                  } rounded-lg`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 relative">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <div
                key={s.id}
                className="bg-white p-3 border border-gray-300 rounded-xl shadow-sm"
              >
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover rounded-lg"
                  />
                  {s.ticket && (
                    <span className="absolute top-3 right-3 bg-yellow-50 border border-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      Ticket Required
                    </span>
                  )}
                </div>
                <div className="py-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {s.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-500">{s.location}</p>
                    {s.recommended && (
                      <div className="flex items-center gap-1 text-yellow-600">
                        <ThumbsUp size={14} className="text-yellow-500" />
                        <span className="text-sm font-medium text-yellow-500">
                          Recommended
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? "bg-gray-700" : "bg-gray-300"
                  }`}
                aria-label={`page-${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="w-10 h-10 bg-white border border-gray-200 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
              aria-label="previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="w-10 h-10 bg-white border border-gray-200 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50"
              aria-label="next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
