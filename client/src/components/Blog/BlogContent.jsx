import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const BlogContent = () => {
  const socialIconStyle =
    "p-2 bg-gray-600 opacity-40 text-white rounded transition-colors shadow-sm";

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid lg:grid-cols-5 gap-10">
      <aside className="lg:col-span-2 md:sticky sm:fixed top-6 h-fit bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Table of Contents
        </h3>
        <ul className="space-y-2 text-blue-400 text-sm">
          <li><a href="#planning" className="hover:underline">Planning for a Short Duration</a></li>
          <li><a href="#packing" className="hover:underline">Not Packing the Right Clothes</a></li>
          <li><a href="#booking" className="hover:underline">Not Booking in Advance</a></li>
          <li><a href="#internet" className="hover:underline">Expecting Fast Internet Everywhere</a></li>
          <li><a href="#sim" className="hover:underline">Thinking Your SIM Will Work Everywhere</a></li>
          <li><a href="#medicine" className="hover:underline">Not Carrying Essential Medicines</a></li>
          <li><a href="#cruise" className="hover:underline">Expecting Luxurious Cruises</a></li>
          <li><a href="#honeymoon" className="hover:underline">Assuming Andaman is Exclusively for Honeymooners</a></li>
          <li><a href="#watersports" className="hover:underline">Thinking Andaman is All About Water Sports</a></li>
          <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
        </ul>
      </aside>

      <article className="lg:col-span-3 space-y-10 leading-relaxed text-gray-700 text-justify">
        <section id="introduction">
          <p className="mb-2">
            Simply Andaman aims to deliver safe, organized, and memorable travel experiences in the Andaman Islands. This Guest Policy outlines the booking process, guest responsibilities, and terms of service to ensure smooth operations and enjoyable trips for all.
          </p>
          <p className="mb-2">
            By completing a booking with us, guests agree to these terms and conditions.
          </p>
        </section>

        <section id="planning">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Planning for a Short Duration</h2>
          <p className="mb-2"><strong>Ideal Duration:</strong> Minimum 5 days recommended.</p>
          <p className="mb-2"><strong>Key Points:</strong> Islands are spread out and most attractions need half or full days to explore.</p>
          <p><strong>Extended Tips:</strong> Explore offbeat destinations like North Andaman if you have more time.</p>
        </section>

        <section id="packing">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Packing the Right Clothes</h2>
          <p><strong>Must-Pack:</strong> Light cottons, hats, sunscreen, comfortable shoes, swimwear, rain gear (during monsoons).</p>
        </section>

        <section id="booking">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Booking in Advance</h2>
          <p><strong>Why it’s Crucial:</strong> Avoid last-minute unavailability, especially in peak season. Hotels, ferries, and tours should be pre-booked.</p>
        </section>

        <section id="internet">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Expecting Fast Internet Everywhere</h2>
          <p><strong>Reality Check:</strong> Limited connectivity in some islands; no live video calls, limited social media, or online work.</p>
        </section>

        <section id="sim">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Thinking Your SIM Will Work Everywhere</h2>
          <p><strong>Network Tip:</strong> BSNL works best; others barely work outside Port Blair.</p>
        </section>

        <section id="medicine">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Carrying Essential Medicines</h2>
          <p>Medical supplies are limited beyond the mainland. Carry personal prescriptions, basic first aid, and sea-sickness remedies.</p>
        </section>

        <section id="cruise">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Expecting Luxurious Cruises</h2>
          <p>Expect basic ferries between islands; luxury cruises are limited and mostly for sightseeing day trips.</p>
        </section>

        <section id="honeymoon">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Assuming Andaman is Exclusively for Honeymooners</h2>
          <p>Andaman has something for everyone — solo travelers, families, friends, and adventure seekers.</p>
        </section>

        <section id="watersports">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Thinking Andaman is All About Water Sports</h2>
          <p>Beyond water activities, enjoy nature treks, island hopping, heritage tours, and cultural shows.</p>
        </section>

        <section id="conclusion">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>

          <div className="grid md:grid-cols-1 border-gray-200">
            <div className="p-10 bg-gray-100 rounded-t-lg">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-red-600 mb-4">
                <span>❌</span> Mistakes
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-700 list-disc">
                <li>Planning too short a trip</li>
                <li>Not booking in advance</li>
                <li>Relying on any SIM</li>
                <li>Expecting luxury cruises</li>
                <li>Thinking it’s expensive</li>
                <li>Packing wrong clothes</li>
                <li>Expecting fast internet</li>
                <li>Skipping essential medicines</li>
                <li>Assuming it’s only for honeymooners</li>
                <li>Believing it’s only water sports</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-10 rounded-b-lg">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-green-600 mb-4">
                <span>✅</span> What to do Instead
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-700 list-disc">
                <li>Spend at least 5 days</li>
                <li>Choose light, tropical, and rain-ready wear</li>
                <li>Book hotels, ferries, and activities early</li>
                <li>Expect minimal connectivity</li>
                <li>Bring a BSNL SIM if possible</li>
                <li>Pack personal meds and a first-aid kit</li>
                <li>Expect basic ferries; book liveaboards early</li>
                <li>It’s for everyone: families, solo, groups</li>
                <li>Budget options are easily available</li>
                <li>Explore nature, culture, and beaches too</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between bg-white mt-10">
            <p className="text-sm text-gray-600">Share this post</p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded-md hover:bg-gray-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-4.553a2 2 0 00-2.828-2.828L12 7.172M9 14l-4.553 4.553a2 2 0 002.828 2.828L12 16.828"
                  />
                </svg>
                Copy link
              </button>

              <a href="#" className={socialIconStyle}><FaTwitter /></a>
              <a href="#" className={socialIconStyle}><FaFacebookF /></a>
              <a href="#" className={socialIconStyle}><FaLinkedinIn /></a>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default BlogContent;
