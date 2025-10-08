import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../assets/frontend_assets/assets";

const guides = [
  { title: "Havelock Island", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Cellular Jail", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Port Blair", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Mayabunder", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Diglipur", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Little Andaman", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Long Island", desc: "We’re delighted to help you. Anything you need, we’re available.", },
  { title: "Neil Island", desc: "We’re delighted to help you. Anything you need, we’re available.", },
];

function Card({ item }) {
  return (
    <div className="relative min-w-[280px] md:min-w-[320px] h-80 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition mr-4">
      <img
        src={assets.Hero}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.desc}</p>
      </div>
      <div className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow transition">
        <FiArrowUpRight size={18} />
      </div>
    </div>
  );
}

function GuideAndaman() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const speed = 0.5;
    let animationFrameId;

    const scrollLoop = () => {
      if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += speed;
        if (scrollRef1.current.scrollLeft >= scrollRef1.current.scrollWidth / 2) {
          scrollRef1.current.scrollLeft = 0;
        }
      }

      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft -= speed;
        if (scrollRef2.current.scrollLeft <= 0) {
          scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 2;
        }
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const duplicatedGuides = [...guides, ...guides];

  return (
    <section className="relative w-full py-16">
      <img src={assets.Guide} alt="Guide boy" className="absolute top-20 left-4 w-24 md:w-40" />
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">Guide of Andaman</h2>
        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Description - Local expertise, eco-conscious tours, 24/7 support & unique access. Turning Andaman’s hidden gems into your unforgettable story.
        </p>
      </div>

      <div ref={scrollRef1} className="relative w-full overflow-x-auto scrollbar-hide mb-6">
        <div className="flex">{duplicatedGuides.map((item, index) => <Card key={index} item={item} />)}</div>
      </div>

      <div ref={scrollRef2} className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex">{duplicatedGuides.map((item, index) => <Card key={index + duplicatedGuides.length} item={item} />)}</div>
      </div>
    </section>
  );
}

export default GuideAndaman;
