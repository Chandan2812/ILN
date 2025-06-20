import aboutImage from "../assets/ILN-logo_c089e4b10fad01a7ab60f4da7afc45c2.png";
import { FaShieldAlt, FaUsers, FaHandshake, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[var(--bg-color2)] dark:bg-[var(--bg-color1)] transition-colors py-12">
      <section className="w-5/6 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="About ILN"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Right Side Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[var(--secondary-color)] dark:text-white mb-4">
            Welcome to ILN Global Community
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Integrated Logistics Network (ILN) is a thriving global community
            that empowers independent and medium-sized freight forwarders and
            logistics companies. Our platform facilitates trusted business
            opportunities and risk mitigation through innovation, networking,
            and reliable partnerships.
          </p>

          {/* Bullet Points / Features */}
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-[var(--primary-color)] text-xl mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Financial Protection</strong> & Cargo Insurance for
                peace of mind
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-[var(--primary-color)] text-xl mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                Access to an elite network of vetted logistics professionals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHandshake className="text-[var(--primary-color)] text-xl mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                Annual AGMs & conferences for building strong partnerships
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaGlobe className="text-[var(--primary-color)] text-xl mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                Global reach with strategic partners at every key location
              </span>
            </li>
          </ul>

          <button className="mt-8 bg-[var(--primary-color)] text-white px-8 py-3 rounded-tl-2xl rounded-br-2xl font-semibold transition hover:opacity-90">
            Join the Network
          </button>
        </div>
      </section>
    </div>
  );
}
