import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth < 768;

  return (
    <header className="w-full bg-[#1B8DC1] text-white font-[PT Serif]">
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 text-sm border-b border-gray-700">
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt /> No: 58 A, Baltimore, MD, USA 4508
        </span>
        <div className="flex gap-5">
          <span className="flex items-center">
            <FaCalendarAlt /> Mon - Sat : 8 am - 5 pm
          </span>
          <span className="flex items-center">
            <FaPhoneAlt /> 0-123-456-789
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-3 w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#FF7235] p-2 rounded">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">Logi</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="text-[#FF7235]">
            Home
          </a>
          <a href="#">Pages</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
        </nav>

        {/* Desktop Sign In & Menu Button */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-[#FF7235] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl">
            Sign In
          </button>
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>
      </div>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 ${
            isMobile ? "w-full" : "w-1/2"
          } h-full bg-[#1B8DC1] z-50 overflow-y-auto p-6`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* Mobile Menu Content */}
          {isMobile ? (
            <div className="mt-10">
              <a href="#" className="block py-2 text-[#FF7235]">
                Home
              </a>
              <a href="#" className="block py-2">
                Pages
              </a>
              <a href="#" className="block py-2">
                Services
              </a>
              <a href="#" className="block py-2">
                Projects
              </a>
              <a href="#" className="block py-2">
                Blogs
              </a>
              <a href="#" className="block py-2">
                Contact
              </a>
              <button className="mt-6 bg-[#FF7235] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl">
                Sign In
              </button>
            </div>
          ) : (
            <div className="mt-10 space-y-6">
              <p className="text-lg leading-relaxed">
                We are a leading logistics provider delivering exceptional
                transport solutions across the globe.
              </p>
              <button className="bg-white text-[#1B8DC1] px-6 py-2 rounded-full font-semibold">
                Contact Us
              </button>
              <hr className="border-white/30" />
              <div>
                <h3 className="text-white text-lg mb-2">We Are Social</h3>
                <div className="flex gap-4 text-2xl">
                  <FaFacebook className="hover:text-[#FF7235]" />
                  <FaTwitter className="hover:text-[#FF7235]" />
                  <FaLinkedin className="hover:text-[#FF7235]" />
                  <FaInstagram className="hover:text-[#FF7235]" />
                </div>
              </div>
              <hr className="border-white/30" />
              <div className="text-sm leading-loose mt-4">
                <p>
                  <strong>Contact Us :</strong>
                </p>
                <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                <p>info@example.com</p>
                <p>logi@example.com</p>
                <p>000 - 123 - 456789</p>
                <p>000 - 235 - 789456</p>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
