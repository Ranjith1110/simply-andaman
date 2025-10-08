import React, { useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    tourPackages: false,
    destination: false,
    activities: false,
    more: false,
  });

  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Show button when scrolled 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="w-full absolute top-0 md:top-10 left-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center bg-white bg-opacity-90 justify-between px-6 py-6">
          <div className="flex items-center">
            <span className="mr-3 text-2xl font-bold flex items-center cursor-pointer select-none"       
            onClick={() => navigate("/")}>
              <span className="mr-2">
                <img
                  src={assets.Logo}
                  alt="Simply Andaman logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </span>
              Simply Andaman
            
            </span>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex ml-auto space-x-8 font-medium">
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                Tour packages
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[160px]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Family
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Adventure
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                Destination
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[160px]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Port Blair
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Havelock
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                Activities
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[160px]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Water Sports
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sightseeing
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => navigate("/blog")}
                className="hover:text-blue-600 cursor-pointer"
              >
                Blog
              </a>
            </li>
            <li className="relative group">
              <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                More
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[120px]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Contact
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  About
                </li>
              </ul>
            </li>
             <li>
              <a
                onClick={() => navigate("/admin-login")}
                className="hover:text-blue-600 cursor-pointer"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out rounded-l-lg ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col space-y-6">
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdowns */}
            {["tourPackages", "destination", "activities", "more"].map(
              (item) => (
                <div key={item} className="border-b border-gray-200 pb-3">
                  <button
                    onClick={() => toggleDropdown(item)}
                    className="w-full text-left flex justify-between items-center hover:text-blue-600 font-semibold text-lg"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        dropdownOpen[item] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black opacity-30 z-30"
          ></div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}

export default Navbar;
