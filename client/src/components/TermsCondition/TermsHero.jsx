import React from "react";

const TermsHero = () => {
  return (
    <section className="bg-[#F3F4F6] py-30 md:pt-60 ">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-8">
        <div>
          <p className="text-blue-600 font-medium mb-2">
            Please read before booking
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Terms and Conditions
          </h1>
        </div>

        <div>
          <p className="text-gray-600 text-lg">
            This term and condition considers all scenarios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsHero;
