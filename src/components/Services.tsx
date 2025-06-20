import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruck,
  FaSnowflake,
  FaBoxOpen,
  FaPlaneDeparture,
  FaGasPump,
} from "react-icons/fa";

import img1 from "../assets/1664820885.webp";
import img2 from "../assets/MSC17013895.webp";
import img3 from "../assets/Blog_Image_International_Port_Ship_Vessel_Containers_Ocean_5.jpg";
import img4 from "../assets/aircraft-on-ground-001-1024x594.jpg";
import img5 from "../assets/Heathrow35-1024x652.jpg";

const verticalData = [
  {
    title: "Freight Forwarding & Customs Brokers",
    description:
      "ILN invites Freight Forwarders and Customs Brokers on the global platform and work with Member Partners globally to compete with integrators and multinationals.",
    icon: <FaTruck />,
    image: img1,
  },
  {
    title: "Cold Chain – Pharma & Perishables",
    description:
      "ILN invites on their global platform the 3PL companies meeting above standards in the Cold Chain transportation network, to work with Member Partners globally.",
    icon: <FaSnowflake />,
    image: img2,
  },
  {
    title: "E-commerce & Express Handlers",
    description:
      "ILN invites such express companies on the global platform using last-mile delivery solutions to cope with the e-commerce demands globally.",
    icon: <FaBoxOpen />,
    image: img3,
  },
  {
    title: "Aerospace & AOG",
    description:
      "ILN invites on their global platform, Aerospace and AOG Handlers with 24/7 operations.",
    icon: <FaPlaneDeparture />,
    image: img4,
  },
  {
    title: "Oil, Gas & Renewable Energy",
    description:
      "ILN invites on their global platform, experienced and professionally managed energy sector handlers.",
    icon: <FaGasPump />,
    image: img5,
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white dark:bg-[var(--secondary-color)] text-[var(--secondary-color)] dark:text-white py-16">
      <div className="w-5/6 md:w-11/12 mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left Text */}
        <div className="md:col-span-1 space-y-6 md:sticky md:top-36">
          <p className="text-sm uppercase text-[var(--primary-color)]">
            Membership Verticals
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            Industries We Empower
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            ILN members operate across key logistics sectors. Tap into a network
            of specialists delivering tailored solutions across industries.
          </p>
        </div>

        {/* Center: Vertical List */}
        <div className="md:col-span-1 space-y-2">
          {verticalData.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(index)}
              whileHover={{ scale: 1.02 }}
              className={`rounded-md cursor-pointer transition-all duration-300 border-l-4 ${
                selected === index
                  ? "bg-[var(--bg-color2)] dark:bg-[var(--bg-color1)] border-[var(--primary-color)]"
                  : "bg-transparent border-transparent"
              }`}
            >
              <div className="flex items-start gap-4 p-4">
                <div className="text-xl text-[var(--primary-color)] dark:text-white mt-1">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--secondary-color)] dark:text-white">
                    {item.title}
                  </h3>

                  <AnimatePresence>
                    {selected === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm mt-2 text-black/70 dark:text-white/70"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Image */}
        <div className="md:col-span-1 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={verticalData[selected].image}
              src={verticalData[selected].image}
              alt={verticalData[selected].title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full rounded-lg"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
