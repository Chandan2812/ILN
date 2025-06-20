import React, { useEffect } from "react";
import hero from "../assets/Hero video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full  h-[80vh] overflow-hidden">
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
      <div className="absolute inset-0 bg-black/20 dark:bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-[80vh] text-center text-[#EFEFEF]">
        <h1
          className="text-3xl sm:text-4xl md:text-7xl font-bold"
          data-aos="fade-up"
        >
          Integrated Logistic <br className="hidden sm:block" />
          <span className="text-white">Network</span>
        </h1>
        <p
          className="max-w-2xl mt-6 text-sm md:text-lg text-[#EFEFEF]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus alias sit dignissimos qui et sequi veniam porro
          doloremque pariatur delectus?
        </p>
        <div
          className="relative inline-block mt-5"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
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
