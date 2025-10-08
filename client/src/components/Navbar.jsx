import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        tourPackages: false,
        destination: false,
        activities: false,
        more: false,
    });

    const toggleDropdown = (name) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const navigate = useNavigate();


    return (
        <>
            <nav className="w-full absolute top-0 md:top-10 left-0 z-30">
                <div className="max-w-7xl mx-auto flex items-center bg-white bg-opacity-90 justify-between px-6 py-6">
                    <div className="flex items-center">
                        <span className="mr-3 text-2xl font-bold flex items-center cursor-pointer select-none">
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
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden lg:flex ml-auto space-x-8 font-medium">
                        <li className="relative group">
                            <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                                Tour packages
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[160px]">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Family</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Adventure</li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                                Destination
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[160px]">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Port Blair</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Havelock</li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                                Activities
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[160px]">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Water Sports</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sightseeing</li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => navigate("/admin-login")} className="hover:text-blue-600 cursor-pointer">Login</a>
                        </li>
                        <li className="relative group">
                            <button className="hover:text-blue-600 flex items-center cursor-pointer select-none">
                                More
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <ul className="hidden group-hover:block absolute bg-white shadow-lg mt-2 rounded-md min-w-[120px]">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out rounded-l-lg ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col space-y-6">
                        <div className="flex justify-end">
                            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-gray-700 hover:text-blue-600 focus:outline-none">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="border-b border-gray-200 pb-3">
                            <button
                                onClick={() => toggleDropdown('tourPackages')}
                                className="w-full text-left flex justify-between items-center hover:text-blue-600 font-semibold text-lg"
                            >
                                Tour packages
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${dropdownOpen.tourPackages ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" />
                                </svg>
                            </button>
                            {dropdownOpen.tourPackages && (
                                <ul className="pl-5 mt-3 space-y-2 text-gray-800 text-base font-normal">
                                    <li className="cursor-pointer hover:text-blue-600 transition">Family</li>
                                    <li className="cursor-pointer hover:text-blue-600 transition">Adventure</li>
                                </ul>
                            )}
                        </div>

                        <div className="border-b border-gray-200 pb-3">
                            <button
                                onClick={() => toggleDropdown('destination')}
                                className="w-full text-left flex justify-between items-center hover:text-blue-600 font-semibold text-lg"
                            >
                                Destination
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${dropdownOpen.destination ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" />
                                </svg>
                            </button>
                            {dropdownOpen.destination && (
                                <ul className="pl-5 mt-3 space-y-2 text-gray-800 text-base font-normal">
                                    <li className="cursor-pointer hover:text-blue-600 transition">Port Blair</li>
                                    <li className="cursor-pointer hover:text-blue-600 transition">Havelock</li>
                                </ul>
                            )}
                        </div>

                        <div className="border-b border-gray-200 pb-3">
                            <button
                                onClick={() => toggleDropdown('activities')}
                                className="w-full text-left flex justify-between items-center hover:text-blue-600 font-semibold text-lg"
                            >
                                Activities
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${dropdownOpen.activities ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" />
                                </svg>
                            </button>
                            {dropdownOpen.activities && (
                                <ul className="pl-5 mt-3 space-y-2 text-gray-800 text-base font-normal">
                                    <li className="cursor-pointer hover:text-blue-600 transition">Water Sports</li>
                                    <li className="cursor-pointer hover:text-blue-600 transition">Sightseeing</li>
                                </ul>
                            )}
                        </div>

                        <div className="border-b border-gray-200 pb-3">
                            <a href="#" className="block hover:text-blue-600 font-semibold text-lg">
                                Ferries
                            </a>
                        </div>

                        <div className="pb-3">
                            <button
                                onClick={() => toggleDropdown('more')}
                                className="w-full text-left flex justify-between items-center hover:text-blue-600 font-semibold text-lg"
                            >
                                More
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${dropdownOpen.more ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" />
                                </svg>
                            </button>
                            {dropdownOpen.more && (
                                <ul className="pl-5 mt-3 space-y-2 text-gray-800 text-base font-normal">
                                    <li className="cursor-pointer hover:text-blue-600 transition">Contact</li>
                                    <li className="cursor-pointer hover:text-blue-600 transition">About</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black opacity-30 z-30"></div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
