import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Mehra",
    location: "New Delhi",
    text: "An unforgettable experience! From serene beaches to adventurous water sports, everything was perfectly planned. The team was always available for any assistance. Highly recommend their luxury package!",
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Rohan Deshmukh",
    location: "Pune",
    text: "I was a bit nervous traveling with my parents, but these guys made sure every little thing was taken care of — from airport pickup to hotel stays. The private ferry rides and candlelight dinner at Havelock were the highlights!",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    name: "David Fernandes",
    location: "Goa",
    text: "Andaman was on my bucket list for years, and finally made it happen through this team. Loved every minute — from scuba diving to the peaceful beaches at Neil Island. Super organized and budget-friendly.",
    img: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 4,
    name: "Sneha & Arjun Rao",
    location: "Bengaluru",
    text: "We booked our honeymoon through this site and honestly, it was flawless. The resorts they suggested were beautiful and the itinerary had the perfect mix of relaxation and adventure. Loved snorkeling at North Bay Island!",
    img: "https://i.pravatar.cc/100?img=14",
  },
  {
    id: 5,
    name: "Kavya Singh",
    location: "Mumbai",
    text: "Great experience overall! The trip was well-organized, and the team was very supportive throughout. Definitely booking again for my next vacation.",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 6,
    name: "Rahul Sharma",
    location: "Chennai",
    text: "We had such a fun trip! The activities were amazing and the support team was always available whenever we needed them. Worth every penny!",
    img: "https://i.pravatar.cc/100?img=16",
  },
  {
    id: 7,
    name: "Neha Patel",
    location: "Ahmedabad",
    text: "A hassle-free experience from start to end. They handled everything so well that we could just relax and enjoy our vacation.",
    img: "https://i.pravatar.cc/100?img=17",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(testimonials.length / perPage);

  // Looping navigation
  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  // Auto switch every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-20">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="text-gray-500 mt-2">
          A small description that why we serve 4 packages and why these are
          reliable to the users.
        </p>
      </div>

      {/* Cards */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {testimonials
              .slice(page * perPage, page * perPage + perPage)
              .map((t) => (
                <div
                  key={t.id}
                  className="rounded-2xl shadow-md border border-gray-100 p-6 bg-white flex flex-col justify-between h-full min-h-[280px]"
                >
                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                    {t.text}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {t.name}
                        </h4>
                        <p className="text-sm text-gray-500">{t.location}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === page ? "bg-gray-800" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-3 rounded sm:-left-8 max-sm:-left-4"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-3 rounded sm:-right-8 max-sm:-right-4"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
