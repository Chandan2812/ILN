import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import contactBanner from "../assets/Heathrow35-1024x652.jpg";

export default function ContactPage() {
  return (
    <div className="bg-white text-black dark:bg-[#121212] dark:text-white transition-colors">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={contactBanner}
          alt="Contact Us"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
            Get In Touch With Us
          </h1>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="w-11/12 md:w-5/6 mx-auto py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--primary-color)]">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Reach out to us for any queries or collaborations. We’re always
            happy to help.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[var(--primary-color)]" />
              <span>
                Unit 1112, 11/F, Wing On Plaza 62,
                <br /> Mody Road, Tsim Sha Tsui East, Kowloon, Hong Kong
              </span>
            </p>
            {/* <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[var(--primary-color)]" />
              +852-1234-5678
            </p> */}
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[var(--primary-color)]" />
              info@integratedlognet.com
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6 bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-lg border dark:border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-white dark:bg-[#2c2c2c] text-black dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
