import { useState } from "react";
import {
  FaTruck,
  FaSnowflake,
  FaBoxOpen,
  FaPlaneDeparture,
  FaGasPump,
} from "react-icons/fa";

import img1 from "../assets/ILN-logo_c089e4b10fad01a7ab60f4da7afc45c2.png";
import img2 from "../assets/Untitled design (12).png";
import img3 from "../assets/Untitled design (13).png";
import img4 from "../assets/truck.jpg";
import img5 from "../assets/truck.jpg";

const verticalData = [
  {
    title: "Freight Forwarding & Customs Brokers",
    description:
      "Seamless cross-border logistics and compliance solutions provided by trusted ILN partners.",
    icon: <FaTruck />,
    image: img1,
  },
  {
    title: "Cold Chain – Pharma & Perishables",
    description:
      "Temperature-sensitive logistics for pharmaceuticals and perishables handled with care.",
    icon: <FaSnowflake />,
    image: img2,
  },
  {
    title: "E-commerce & Express Handlers",
    description:
      "Fast, reliable delivery and reverse logistics tailored for modern commerce needs.",
    icon: <FaBoxOpen />,
    image: img3,
  },
  {
    title: "Aerospace & AOG",
    description:
      "Critical supply chain logistics for aircraft parts and emergency support worldwide.",
    icon: <FaPlaneDeparture />,
    image: img4,
  },
  {
    title: "Oil, Gas & Renewable Energy",
    description:
      "Heavy-duty logistics for energy sectors including oil rigs and green solutions.",
    icon: <FaGasPump />,
    image: img5,
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white dark:bg-[var(--secondary-color)] text-[var(--secondary-color)] dark:text-white py-16">
      <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left Text */}
        <div className="md:col-span-1 space-y-6 sticky top-20">
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
        <div className="md:col-span-1 space-y-4">
          {verticalData.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
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
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      selected === index ? "max-h-[200px] mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-black/70 dark:text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="md:col-span-1">
          <img
            src={verticalData[selected].image}
            alt={verticalData[selected].title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
