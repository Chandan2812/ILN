import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/ILN_logo-01.png";
import img2 from "../assets/Untitled design (13).png";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="text-[#111] dark:text-white font-raleway bg-[--bg-color2] dark:bg-[--bg-color1]">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <img
            src="https://www.integratedlognet.com/wp-content/uploads/2019/01/about-bg2-1.jpg"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-light text-white drop-shadow-lg">
              About Us
            </h1>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {/* Section 1: Integrated Logistics Network */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary-color)] uppercase mb-4">
                Integrated Logistics Network
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Integrated Logistics Network is a community of freight
                forwarders and logistics companies that aims to offer its
                members ethical, result-oriented partnerships across the globe,
                ensuring smooth, safe and secure transportation, storage,
                handling, packaging, and last mile delivery of cargo.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A Secured Global Network created by qualified companies in the
                world of freight forwarding, dedicated to building a global
                directory of top-class agencies that benefit from ILN customized
                services and a strong sense of community.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                ILN members receive tailor-made solutions to suit their business
                needs and select associations globally. Membership limits per
                country are based on the country’s GDP and trade volumes.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden invert-0 dark:invert">
              <img
                src={img1}
                alt="ILN Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section 2: Founder */}
          <div className="bg-white dark:bg-[#1c1c2c] p-10 rounded-xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <img
                  src={img2}
                  alt="Founder Image"
                  className="rounded-lg  w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary-color)] uppercase mb-4">
                  Rohinton Bilimoria : Founder
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Throughout my 40+ year career in the global supply chain, I've
                  consistently driven growth and navigated complex operational
                  challenges for major industry players. This journey, spanning
                  Asia, Europe, the Americas, and the MENA region, across
                  companies of all sizes, has given me a deep understanding of
                  corporate best practices and the critical importance of
                  strong, collaborative networks.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My passion lies in building high-performing teams and
                  fostering mutually beneficial relationships. I believe that a
                  strong ethical foundation, coupled with a tireless work ethic
                  and a genuine commitment to excellence, are essential for
                  success in today's dynamic business landscape.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  These principles have been the guiding force behind the
                  creation of the ILN Community. My vision for ILN is to provide
                  a platform for logistics professionals worldwide to connect,
                  collaborate, and thrive. I am confident that by fostering a
                  supportive and collaborative environment, we can unlock the
                  full potential of the global logistics network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
