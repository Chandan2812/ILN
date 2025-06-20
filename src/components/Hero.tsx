import React from "react";
import hero from "../assets/Hero video.mp4";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full md:min-h-screen h-[80vh] overflow-hidden">
      {/* Video container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full md:h-full h-[80vh] object-cover"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-center text-[#EFEFEF]">
        <p className="text-sm md:text-lg text-[#EFEFEF] mb-2">
          Redefined Cargo Services
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading- ">
          Integrated Logistic <br className="hidden sm:block" />
          <span className="text-white">Network</span>
        </h1>
        <p className="max-w-2xl mt-6 text-sm md:text-lg text-[#EFEFEF]">
          Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula
          sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. Nulla quis lorem ut libero malesuada
          feugiat.
        </p>
        <div className="relative inline-block mt-5">
          <div className="absolute top-1 left-1 w-full h-full bg-[var(--primary-color)] opacity-30 rounded z-0" />
          <button className="relative z-10 text-white bg-[var(--primary-color)] px-6 py-2 font-semibold rounded">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
