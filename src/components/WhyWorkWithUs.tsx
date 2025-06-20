import React, { useEffect, useRef, useState } from "react";
import worldMap from "../assets/Untitled design (13).png";

const stats = [
  { value: 5000, label: "New Partners Every Year" },
  { value: 30, label: "Years Of Field Experience" },
  { value: 14000, label: "Talented Staffs Worldwide" },
  { value: 68000, label: "Successful Project Completion" },
  { value: 2000000, label: "Tonnes Supplied Annually" },
];

const animateValue = (
  start: number,
  end: number,
  duration: number,
  callback: (val: number) => void
) => {
  let startTimestamp: number | null = null;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    callback(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const WhyWorkWithUs: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          stats.forEach((stat, i) => {
            animateValue(0, stat.value, 1500, (val) => {
              setCounts((prev) => {
                const updated = [...prev];
                updated[i] = val;
                return updated;
              });
            });
          });
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-[var(--secondary-color)] dark:bg-[var(--secondary-color)] font-['PT_Serif'] dark:text-white py-12 px-4 overflow-hidden"
    >
      <img
        src={worldMap}
        alt="World map background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="text-4xl font-bold mb-4">Why You Work With ILN</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold">
                {counts[i].toLocaleString()}+
              </p>
              <p className="text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
