import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const waterSportsData = [
  { id: 1, name: "Scuba Diving", category: "Underwater", image: assets.Scubadiving, author: "Michel Snum", date: "12 June 2023" },
  { id: 2, name: "Sea Kart", category: "Surface", image: assets.Seakart, author: "Michel Snum", date: "12 June 2023" },
  { id: 3, name: "Parasailing", category: "Air", image: assets.Parasailing, author: "Michel Snum", date: "12 June 2023" },
  { id: 4, name: "Scuba Diving", category: "Underwater", image: assets.Scubadiving, author: "Michel Snum", date: "12 June 2023" },
  { id: 5, name: "Sea Kart", category: "Surface", image: assets.Seakart, author: "Michel Snum", date: "12 June 2023" },
  { id: 6, name: "Parasailing", category: "Air", image: assets.Parasailing, author: "Michel Snum", date: "12 June 2023" },
  { id: 7, name: "Scuba Diving", category: "Underwater", image: assets.Scubadiving, author: "Michel Snum", date: "12 June 2023" },
  { id: 8, name: "Sea Kart", category: "Surface", image: assets.Seakart, author: "Michel Snum", date: "12 June 2023" },
  { id: 9, name: "Parasailing", category: "Air", image: assets.Parasailing, author: "Michel Snum", date: "12 June 2023" },
  { id: 10, name: "Scuba Diving", category: "Underwater", image: assets.Scubadiving, author: "Michel Snum", date: "12 June 2023" },
];

const WaterSportCard = ({ sport }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
    <div className="relative h-64 sm:h-72 lg:h-80 p-5">
      <img src={sport.image} alt={sport.name} className="w-full h-full object-cover rounded-2xl" />
    </div>
    <div className="p-4 pt-1">
      <h3 className="text-xl font-semibold text-[#1F2937] px-2">{sport.name}</h3>
      <p className="text-sm text-[#374151] px-2 py-2 border-t border-gray-200 mt-4">{sport.author} • {sport.date}</p>
    </div>
  </div>
);

const Arrow = ({ direction }) => (
  <svg
    className={`w-4 h-4 text-gray-600 transition-colors duration-200 ${direction === "left" ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

const SectionHeader = () => (
  <div className="w-full bg-white py-12">
    <div className="text-center relative max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
          Water Sports in Andaman
        </h2>
        <img
          src={assets.Birds}
          alt="Flying Birds"
          className="absolute top-0 right-[-10%]  w-20 sm:w-28 lg:w-36"
        />
      </div>
      <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
        Dive coral reefs, snorkel vibrant bays, walk the seabed, jet-ski turquoise waves, parasail above coasts & kayak glowing waters—thrills for every adventurer!
      </p>
    </div>
  </div>
);

const WatersportsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(waterSportsData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = waterSportsData.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <SectionHeader />
      <section className="relative py-14 overflow-hidden min-h-[900px]">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${assets.Squbadiver})` }}></div>
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {currentCards.map((sport) => <WaterSportCard key={sport.id} sport={sport} />)}
          </div>
          <div className="mt-16 flex justify-between items-center">
            <div className="flex space-x-2 mr-4">
              {Array.from({ length: totalPages }, (_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${currentPage === i + 1 ? "bg-white" : "bg-gray-400"}`}></span>
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-md border border-gray-200 transition-colors duration-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Arrow direction="left" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-md border border-gray-200 transition-colors duration-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Arrow direction="right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatersportsSection;
