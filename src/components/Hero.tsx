import React from "react";
import hero from "../assets/Hero video.mp4";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-center text-white px-4">
        <p className="text-sm md:text-base text-gray-200 mb-2">
          Redefined Cargo Services
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Innovative Logistic <br className="hidden sm:block" />
          <span className="text-white">Solutions</span>
        </h1>
        <p className="max-w-2xl mt-6 text-sm md:text-base text-gray-200">
          Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula
          sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. Nulla quis lorem ut libero malesuada
          feugiat.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded text-sm font-semibold">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
