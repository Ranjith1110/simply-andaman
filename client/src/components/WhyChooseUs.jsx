import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const WhyChooseUs = () => {
  const data = {
    title: "Why the Choose us ?",
    description:
      "Many reasons why customer choose us than other ecommerce. We have some plus point that maybe other can’t have.",
    image: assets.Faqimg,
    cards: [
      {
        icon: assets.Faqicon1,
        title: "Tailor-Made Experiences",
        desc: "We craft personalised itineraries to match your travel style, interests, and budget."
      },
      {
        icon: assets.Faqicon2,
        title: "Best Price Guarantee",
        desc: "Get the most competitive rates without compromising on quality and comfort."
      },
      {
        icon: assets.Faqicon3,
        title: "Trusted by Thousands",
        desc: "Join a growing community of happy travellers who’ve trusted us to plan their perfect getaways."
      },
      {
        icon: assets.Faqicon4,
        title: "Exclusive Deals & Offers",
        desc: "Enjoy access to special discounts, seasonal offers, and travel perks only available through us."
      }
    ],
    trees: {
      left: assets.Treeleft,
      right: assets.Treeright
    },
    bgColor: "#E9F0FA"
  };

  return (
    <section className="w-full relative px-4 flex justify-center mt-10">
      <img
        src={data.trees.right}
        alt="tree"
        className="absolute top-[-7%] right-0 w-28 md:w-80 pointer-events-none z-10 md:top-[-40%]"
      />
      <img
        src={data.trees.left}
        alt="tree"
        className="absolute bottom-[-9%] left-0 w-28 md:w-80 pointer-events-none z-10 md:bottom-[-40%]"
      />

      <div className={`relative rounded-2xl w-full max-w-6xl p-8 md:p-16`} style={{ backgroundColor: data.bgColor }}>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">{data.title}</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">{data.description}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img src={data.image} alt="Why Choose Us" className="max-w-sm w-full" />
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-center justify-center w-10 h-10 bg-[#E9F0FA] rounded-full mb-4">
                  <img src={card.icon} alt="icon" />
                </div>
                <h3 className="text-lg font-bold  text-gray-800">{card.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
