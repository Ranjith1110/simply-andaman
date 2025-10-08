import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const cards = [
    {
        title: 'Select your packages',
        desc: 'The top stays on every island',
        icon: <img src={assets.Feature1} alt="packages" className="w-18 h-18" />,
    },
    {
        title: 'Explore things-to-do',
        desc: 'All the must-do-activities right here',
        icon: <img src={assets.Feature2} alt="packages" className="w-18 h-18" />,
    },
    {
        title: 'Ferry booking',
        desc: 'Inter-island travel made easy',
        icon: <img src={assets.Feature3} alt="packages" className="w-18 h-18" />,
    },
    {
        title: 'Customise your trip',
        desc: 'Build the trip of a lifetime with us',
        icon: <img src={assets.Feature4} alt="packages" className="w-18 h-18" />,
    },
];

function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center pt-36 pb-20">
            <img
                src={assets.Hero}
                alt="Andaman Island"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
            />

            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

            <div className="absolute top-[85%] z-20 w-full px-4">
                <div className="overflow-x-auto lg:overflow-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full">
                    <div className="flex gap-8 min-w-max whitespace-nowrap lg:flex-wrap lg:justify-center">
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="flex flex-col bg-white rounded-xl shadow-xl px-6 py-8 min-w-[250px] max-w-[280px] flex-shrink-0"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-lg leading-tight block whitespace-normal break-words max-w-[65%]">
                                        {card.title}
                                    </h3>
                                    <div className="mb-8 flex-shrink-0">{card.icon}</div>
                                </div>
                                <p className="text-base text-gray-700 whitespace-normal break-words">
                                    {card.desc}
                                </p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
