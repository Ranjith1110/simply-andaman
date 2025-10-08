import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const PackageHero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    travelDate: "",
    phoneNumber: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      travelDate: "",
      phoneNumber: "",
      budget: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add backend logic here
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center md:pt-10"
      style={{ backgroundImage: `url(${assets.Package})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Package Info */}
        <div className="text-white space-y-6">
          <div className="flex items-center space-x-2">
            <span className="bg-green-500 text-xs font-semibold px-3 py-1 rounded-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Best Seller
            </span>
            <p className="text-gray-200 text-sm font-light">
              A lot of people are choosing this.
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-poppins">
            3 Nights 4 Days <br /> Tour Package <br /> to Andaman
          </h1>

          <p className="text-gray-200 text-lg max-w-md font-inter">
            Andaman Unlocked! ✨ Explore Havelock beaches 🏝️, Cellular Jail 🏛️, Baratang caves 🦇,
            and North Bay reefs 🐠 — experience adventure and island magic!
          </p>
        </div>

        {/* RIGHT: Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins">
            Plan your dream trip
          </h2>
          <p className="text-gray-600 text-sm mb-6 font-inter">
            Fill out the form below and we'll create a personalized itinerary for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="travelDate"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Travel Date
                </label>
                <input
                  type="text"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  placeholder="DD/MM/YY"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-gray-600 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                >
                  <option value="">Select</option>
                  <option value="economy">Economy</option>
                  <option value="mid-range">Mid-Range</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your travel preference, group size, special requirements..."
                rows="4"
                maxLength="275"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              ></textarea>
              <p className="text-right text-xs text-gray-500">
                {275 - formData.description.length} characters left
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Request Callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PackageHero;
