import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../assets/h (1).jpg";
import hero2 from "../assets/h (2).jpg";
import hero3 from "../assets/h (3).jpg";
import hero4 from "../assets/h (4).jpg";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const images = [
  {
    url: hero1,
    title: "Experience Seamless Logistics with ILN.",
    subtitle:
      "Simplify global freight operations with a network that ensures reliability, security, and speed.",
  },
  {
    url: hero2,
    title: "ILN: Connect. Collaborate. Conquer.",
    subtitle:
      "Form meaningful partnerships, share insights, and achieve success together across borders.",
  },
  {
    url: hero3,
    title: "ILN: Where Logistics Meets Innovation.",
    subtitle:
      "Leverage smart technology and ethical collaboration to stay ahead in a competitive industry.",
  },
  {
    url: hero4,
    title: "Join ILN: The Future of Logistics.",
    subtitle:
      "Be part of a visionary community shaping the future of freight forwarding worldwide.",
  },
];

type Offer = {
  _id: string;
  title: string;
  subtitle?: string;
  bannerImage?: string;
  ctaLabel?: string;
  ctaLink?: string;
  startDate?: string;
  endDate?: string;
};

const HeroSection: React.FC = () => {
  const [current, setcurrent] = useState(0);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await axios.get<Offer[]>(`${baseURL}/api/offer/view`);
        if (res.data && res.data.length > 0) {
          setOffers(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch offers", err);
      }
    };

    fetchOffer();
  }, []);

  useEffect(() => {
    if (offers.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [offers]);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    const interval = setInterval(() => {
      setcurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full md:h-[100vh] h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out">
        <img
          src={images[current].url}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text + Offer Layout */}
      <div className="relative z-20 flex flex-col md:flex-row justify-center md:justify-between items-center h-full px-6 md:px-16 text-white">
        {/* Text Section */}
        <div className="w-full md:w-2/3 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">
            {images[current].title}
          </h1>
          <p
            className="mt-4 text-sm md:text-lg max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {images[current].subtitle}
          </p>
        </div>

        {/* Offer Section */}
        {offers.length > 0 && (
          <div
            className="w-full md:w-[30%] backdrop-blur-md bg-white/10 border border-white/30 
                 rounded-2xl shadow-2xl overflow-hidden animate-fade-in transition-all duration-500"
            data-aos="fade-left"
          >
            <img
              src={offers[currentIndex].bannerImage}
              alt={offers[currentIndex].title}
              className="w-full object-cover max-h-64 rounded-t-2xl"
            />
            <div className="p-5 text-center text-white">
              <h3 className="text-lg font-bold">
                {offers[currentIndex].title}
              </h3>
              {offers[currentIndex].subtitle && (
                <p className="text-sm text-gray-100/80 mt-1">
                  {offers[currentIndex].subtitle}
                </p>
              )}
              {offers[currentIndex].ctaLabel &&
                offers[currentIndex].ctaLink && (
                  <a
                    href={offers[currentIndex].ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-[var(--primary-color)] text-white rounded-tl-2xl rounded-br-2xl font-medium hover:bg-white hover:text-black transition"
                  >
                    {offers[currentIndex].ctaLabel}
                  </a>
                )}
            </div>
          </div>
        )}
      </div>

      {/* <div className="absolute z-30 right-4 sm:right-10 top-[65%] transform -translate-y-1/2  gap-3 md:flex hidden">
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
            ${current === idx ? "grayscale-0" : "grayscale"} 
            group-hover:grayscale-0
          `}
              />
            </div>
           
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default HeroSection;
