import React from "react";
import footerBg from "../assets/truck.jpg";
import logo from "../assets/ILN-logo_c089e4b10fad01a7ab60f4da7afc45c2.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

import { HiPaperAirplane } from "react-icons/hi";
import { SiX } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background image */}
      <img
        src={footerBg}
        alt="footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-4 sm:px-8 py-16 max-w-7xl mx-auto space-y-12">
        {/* Top section: Heading + Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Subscribe Newsletter</h2>
            <hr className="w-20 border-[var(--primary-color)] border-b-2" />
          </div>
          <div className="flex items-center gap-2 border-b border-white/30 p-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your mail id"
              className="bg-transparent text-white placeholder-white w-full outline-none"
            />

            <button className="relative z-10 text-[var(--primary-color)]  p-2 rounded">
              <HiPaperAirplane className="text-3xl rotate-90" />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 text-sm">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-36" />
            </div>
            <a href="mailto:info@integratedlognet.com">
              <span className="flex items-center">
                <FaEnvelope className="mr-2" /> info@integratedlognet.com
              </span>
            </a>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-xl mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Find Us Here</li>
              <li>Get In Touch</li>
              <li>FAQ Page</li>
              <li>Global Network</li>
              <li>Chat Support</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-3">Services</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Our Services</li>
              <li>What We Do</li>
              <li>Request a Freight</li>
              <li>Track & Trace</li>
              <li>Brokerage Terms</li>
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="font-bold text-xl mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Register Now</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center text-sm border-t border-white/20 pt-6">
          <p className="text-gray-300 mb-4 sm:mb-0">
            © 2025 Integrated Logistics Network All rights reserved
          </p>

          <div className="flex gap-4 mb-8">
            {[FaFacebook, SiX, FaLinkedin, FaInstagram].map((Icon, idx) => (
              <Icon
                key={idx}
                className="dark:text-white text-[var(--primary-color)] text-3xl cursor-pointer dark:hover:text-[var(--primary-color)]"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
