import { assets } from "../assets/frontend_assets/assets";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: assets.Icon1, 
      title: "Easy online booking",
      description:
        "Hassle-free online booking — plan your trip anytime, anywhere.",
      linkText: "Contact Us",
    },
    {
      id: 2,
      icon: assets.Icon2, 
      title: "We go hand in hand",
      description: "From booking to boarding, we go hand in hand.",
      linkText: "Learn more",
    },
    {
      id: 3,
      icon: assets.Icon3, 
      title: "Friendly support",
      description: "Got questions? Our friendly team is just a call away!",
      linkText: "Learn more",
    },
    {
      id: 4,
      icon: assets.Icon4, 
      title: "Unique experience",
      description:
        "Not just a trip — a unique experience you’ll never forget.",
      linkText: "Learn more",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center space-y-3"
          >

            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-50">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 object-contain"
              />
            </div>


            <h3 className="text-base font-semibold text-gray-800">
              {feature.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
              {feature.description}
            </p>

            <a
              href="#"
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              {feature.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
