import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const cards = [
    {
        title: '3 Night 4 Days',
        location: 'Port Blair',
        desc: 'A small description about Havelock island...',
        trend: true,
        price: '₹1200/Person',
        img: assets.Hero
    },
    {
        title: '2 Night 4 Days',
        location: 'Baratang',
        desc: 'A small description about Baratang island...',
        trend: false,
        price: '₹1200/Person',
        img: assets.Hero
    },
    {
        title: 'Havelock Island',
        location: 'Port Blair',
        desc: 'A small description about Havelock island...',
        trend: true,
        price: '₹1200/Person',
        img: assets.Hero
    },
    {
        title: 'Another Package',
        location: 'Havelock',
        desc: 'A small description about Havelock island...',
        trend: false,
        price: '₹1200/Person',
        img: assets.Hero
    },
    {
        title: 'Luxury Stay',
        location: 'Corbyns Cove',
        desc: 'Experience the luxury island life...',
        trend: false,
        price: '₹1200/Person',
        img: assets.Hero
    },
];

const categories = ['Family', 'Honeymoon', 'Premium', 'Luxury', 'Best Seller'];

function TourPackages() {
    const [activeTab, setActiveTab] = useState('Family');

    return (
        <section className="w-full bg-gray-100 pt-48 md:pt-86 pb-16">

            <img
                src={assets.Airballon}
                alt="airballon"
                className="hidden md:block absolute top-180 left-0 w-xl h-auto "
                style={{ filter: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))" }}
            />

            <img
                src={assets.Parachut}
                alt="airballon"
                className="hidden md:block absolute top-210 right-5 w-md h-auto "
                style={{ filter: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))" }}
            />

            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                    Andaman Tour Packages Best Seller
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Romantic hideaways, family adventures, volcanic thrills, bioluminescent magic, luxury escapes &amp; eco-cultural journeys – curated for every traveler. Your dream island experience starts here!
                </p>
            </div>

            <div className="max-w-2xl mx-auto mb-8 py-2 flex flex-wrap justify-center gap-4 border border-gray-300 rounded-2xl">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-2 rounded-lg font-semibold text-sm transition ${activeTab === cat ? 'bg-blue-100 text-blue-700 shadow' : 'bg-white text-gray-700 hover:bg-blue-50'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {cards.slice(0, 3).map((card, index) => (
                        <PackageCard key={index} card={card} />
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {cards.slice(3).map((card, index) => (
                        <PackageCard key={index} card={card} />
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto text-center">
                <button className="border border-blue-600 text-blue-700 rounded-md px-6 py-2 font-semibold hover:bg-blue-50 transition">
                    View all
                </button>
            </div>
        </section>
    );
}

function PackageCard({ card }) {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col min-h-[200px] h-56">
            <div className="flex justify-between px-4 pt-4 z-20">
                {card.trend && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        • Trending
                    </span>
                )}
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {card.price}
                </span>
            </div>

            <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent z-10"></div>

            <div className="relative z-20 flex flex-col h-full justify-end p-5 text-left text-white drop-shadow">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <div className="flex items-center text-xs mb-1 gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M10 2a6 6 0 016 6c0 4-6 12-6 12S4 12 4 8a6 6 0 016-6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {card.location}
                </div>
                <p className="text-xs">{card.desc}</p>
            </div>
        </div>
    );
}



export default TourPackages;
