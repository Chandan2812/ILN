import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../assets/h (1).jpg";
import hero2 from "../assets/h (2).jpg";
import hero3 from "../assets/h (3).jpg";
import hero4 from "../assets/h (4).jpg";

const images = [
  {
    url: hero1,
    title: "Innovating Global Logistics",
  },
  {
    url: hero2,
    title: "Accelerating Global Trade",
  },
  {
    url: hero3,
    title: "Maximizing Supply Chain Impact",
  },
  {
    url: hero4,
    title: "Shaping Tomorrow’s Logistics",
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full md:h-[100vh] h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
        <img
          src={images[currentIndex].url}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full text-left px-6 md:px-16 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold" data-aos="fade-up">
          {images[currentIndex].title}
        </h1>
        <p
          className="mt-4 text-sm md:text-lg max-w-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          The world’s first logistics loyalty program for freight forwarders and
          traders
        </p>
        <button
          className="mt-6 px-6 py-2 rounded border text-white border-white font-semibold hover:bg-white hover:text-black transition"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          READ MORE
        </button>
      </div>

      <div className="absolute z-30 right-4 sm:right-10 top-[65%] transform -translate-y-1/2  gap-3 md:flex hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group cursor-pointer rounded overflow-hidden transition-all duration-300"
            onClick={() => handleThumbnailClick(idx)}
          >
            <div
              className={`
          w-32 h-32 overflow-hidden rounded-md
          transition-transform duration-300 
          transform group-hover:scale-105
        `}
            >
              <img
                src={img.url}
                alt={`thumb-${idx}`}
                className={`
            w-full h-full object-cover 
            transition-all duration-300 
            ${currentIndex === idx ? "grayscale-0" : "grayscale"} 
            group-hover:grayscale-0
          `}
              />
            </div>
            <p className="text-xs text-white text-center mt-1 font-semibold leading-tight">
              {img.title.split(" ")[0]} <br /> {img.title.split(" ")[1] || ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
