import React from "react";
import worldMap from "../assets/Untitled design (13).png"; // adjust path as needed

const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="relative bg-[#03252D] text-white py-16 px-4 overflow-hidden">
      {/* Background image using <img> */}
      <img
        src={worldMap}
        alt="World map background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-300 mb-4">Why You Work With Logi</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:leading-tight mb-10">
          We Are A Leading One–Stop Logistic{" "}
          <span className="text-orange-500 underline">Service</span> Provider{" "}
          <br />
          Helps To <span className="text-orange-500 underline">Reach</span> Your
          Exact Delivery Destination On Time <br />
          <span className="text-orange-500 underline">
            Without Delay And Damages.
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 text-center">
          {[
            ["5K+", "New Partners Every Year"],
            ["30+", "Years Of Field Experience"],
            ["14K+", "Talented Staffs Worldwide"],
            ["68K+", "Successful Project Completion"],
            ["2M+", "Tonnes Supplied Annually"],
          ].map(([number, label], i) => (
            <div key={i}>
              <p className="text-3xl font-bold">{number}</p>
              <p className="text-sm text-gray-300 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
