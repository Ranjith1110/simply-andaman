import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  const socialIconStyle =
    "p-2 bg-gray-600 opacity-40 text-white rounded transition-colors shadow-sm";

  return (
    <footer className="relative mt-20">
      {/* CTA Section */}
      <div className="absolute top-[-75px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[100%] max-w-5xl z-30">
        <div
          className="relative rounded-xl overflow-hidden shadow-2xl p-6 md:p-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${assets.Ctabg})` }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="bg-black/30 p-4 rounded-lg">
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                Be the First to know <br />
                Our Promo before others!
              </h2>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter mail address"
                className="py-3 px-7 w-full rounded-l-lg bg-white border-none focus:ring-0 focus:outline-none"
              />
              <button className="bg-white text-gray-600 font-semibold py-3 px-6 rounded-r-lg whitespace-nowrap hover:bg-gray-100 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="relative pt-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.FooterBg})` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 grid md:grid-cols-[2fr_1fr_1fr] gap-10 relative z-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.Logo} alt="Simply Andaman" className="h-6" />
              <span className="font-bold text-lg text-gray-600">
                Simply Andaman
              </span>
            </div>
            <p className="mt-4 text-gray-600 max-w-sm text-sm">
              We’re a small crew of locals and Andaman-lovers helping you make
              the most of your trip to the Andamans.
            </p>
            <p className="mt-2 text-gray-600 max-w-sm text-sm">
              You can build your holiday from the ground-up, exactly how you
              like. We’ve personally verified each experience, so you know that
              they’re tried, tested and true!
            </p>
            <div className="flex gap-4 mt-6 text-xl text-[#0F2F5D]">
              <a href="#" className={socialIconStyle}>
                <FaTwitter />
              </a>
              <a href="#" className={socialIconStyle}>
                <FaFacebookF />
              </a>
              <a href="#" className={socialIconStyle}>
                <FaYoutube />
              </a>
              <a href="#" className={socialIconStyle}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4 text-md">Company</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Travel Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Influencer & Brand
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4 text-md">More</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Refund & Cancelation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Terms & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Content & Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0F2F5D] transition-colors">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Decorations */}
        <div className="absolute bottom-18 left-1/2 -translate-x-1/2 z-10">
          <img src={assets.Footergirl} alt="girl" className="h-32" />
        </div>

        <div className="absolute bottom-0 left-0 z-0">
          <img src={assets.Lefttree} alt="tree left" className="h-40" />
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <img src={assets.Righttree} alt="tree right" className="h-40" />
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 pb-6 text-gray-600 relative z-10">
          <p className="text-sm">Copyright © 2024. Crafted with Love. <br /><a href="https://rancotechnology.com/" target="_blank">Developed by Ranco Technology</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
