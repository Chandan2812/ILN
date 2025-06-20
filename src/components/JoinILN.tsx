import {
  FaShieldAlt,
  FaGlobe,
  FaUsers,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";

export default function WhyJoinILN() {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Financial Security",
      points: [
        "Due diligence for stability & trust",
        "Risk protection with financial coverage",
      ],
    },
    {
      icon: <FaGlobe />,
      title: "Global Market Access",
      points: ["Work with trusted ILN members", "Expand into new trade routes"],
    },
    {
      icon: <FaUsers />,
      title: "Elite Networking",
      points: [
        "Join AGMs & connect globally",
        "Use smart scheduler for meetings",
      ],
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Efficiency",
      points: [
        "Collaborate with global partners",
        "Minimize delays with strong network",
      ],
    },
    {
      icon: <FaHandshake />,
      title: "Professional Growth",
      points: [
        "Build long-term trusted relationships",
        "Enhance social & business reputation",
      ],
    },
  ];

  return (
    <section className="py-12 bg-[var(--bg-color2)] dark:bg-[var(--bg-color1)] transition-colors font-['PT_Serif'] text-[var(--secondary-color)] dark:text-white">
      <div className="w-5/6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            What Happens When You Join ILN?
          </h2>
          <p className="text-md text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            ILN membership provides global reach, secure partnerships, and tools
            to elevate your logistics business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[var(--secondary2-color)] shadow-sm p-5 rounded-xl flex gap-4 items-start hover:shadow-lg transition"
              >
                <div className="text-[var(--primary-color)] text-xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Special Summary Box */}
          <div className="flex-1 bg-[var(--primary-color)] text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                ILN Gives You the Edge
              </h3>
              <ul className="space-y-3 text-sm">
                <li>✔ Reduce operational & financial risks</li>
                <li>✔ Expand globally with reliable partners</li>
                <li>✔ Attend industry AGMs & events</li>
                <li>✔ Build a network of trust & efficiency</li>
              </ul>
            </div>
            <button className="mt-8 bg-white text-[var(--primary-color)] font-semibold px-6 py-2 rounded-tl-xl rounded-br-xl hover:bg-gray-100 transition w-fit">
              Join the ILN Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
