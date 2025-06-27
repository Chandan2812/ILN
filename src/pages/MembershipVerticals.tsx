import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bannerImg from "../assets/verticals/membership verticals.jpg";

/* ────────────  data types ──────────── */
interface SponsorPackage {
  tier: string;
  features: string[];
}

interface Vertical {
  title: string;
  intro?: string;
  content?: string;
  sponsors?: SponsorPackage[];
  addons?: string[];
  scheduler?: string[];
  outings?: string[];
}

/* ────────────  verticals array ──────────── */
const verticals: Vertical[] = [
  {
    title: "Conference Sponsorship Opportunities",
    intro: `
      Put your brand centre-stage at the ILN AGM. Choose a tier below,
      enjoy a free delegate pass, a fully dressed booth / pod, power,
      lighting and prime visibility among global logistics leaders.
    `,
    sponsors: [
      {
        tier: "PLATINUM SPONSOR",
        features: [
          "ILN Member / External Sponsor Suite or Meeting Pod package",
          "1 Free ILN AGM Conference Pass",
          "Full graphics design & printing for booth panels",
          "Suite / Pod 3 m × 2 m × 1.5 m structure",
          "Complimentary booth setup & removal",
          "Dedicated suite / pod space",
          "Table counter with 1 chair",
          "Meeting table with 3 chairs",
          "Fascia with company name & booth number",
          "Booth carpeting & lighting",
          "1 power socket",
          "1 waste bin",
        ],
      },
      {
        tier: "GOLD SPONSOR",
        features: [
          "ILN Member / External Sponsor Suite or Meeting Pod package",
          "1 Free ILN AGM Conference Pass",
          "Full graphics design & printing for booth panels",
          "Pod 2 m × 1 m × 1.5 m structure",
          "Complimentary booth setup & removal",
          "Dedicated pod space",
          "Table counter with 1 chair",
          "Fascia with company name & booth number",
          "Booth carpeting & lighting",
          "1 power socket",
          "1 waste bin",
        ],
      },
    ],
    addons: [
      "Gala Dinner Sponsor",
      "Opening Cocktails evening",
      "Lanyard Sponsor",
      "T-shirt Sponsor",
      "Golf T-shirt Sponsor (subject to event)",
      "Pen Sponsor",
      "Notebook Sponsor",
    ],
    scheduler: [
      "AGM Meeting Scheduler is exclusive to event participants for arranging appointments with each other.",
      "Average of 16 meetings per participant over two days.",
      "Book structured, one-to-one meetings with attending delegates.",
      "Opens 2–3 weeks before the AGM; login details emailed to registered delegates.",
    ],
    outings: [
      "Delegates unwind the evening before the AGM starts.",
      "Half-day tour to a special site.",
      "Golf event for relaxed networking.",
    ],
  },
  {
    title: "Scheduled Networking Opportunities & AGMs",
    content: `
      The ILN Annual General Meeting is a cornerstone of our community, offering unparalleled opportunities for networking, business development, and social interaction.

      - Formal Business Meetings: Engage in formal business discussions, explore potential partnerships, and identify new opportunities.
      - Informal Networking: Enjoy relaxed social settings to connect with fellow members, build relationships, and foster a strong sense of community.
      - Social Events: Participate in ice-breaker activities, evening receptions, and dinners to enhance social connections and build lasting relationships.
      - Sponsorship Opportunities: Sponsor the ILN AGM and gain valuable exposure to a network of influential industry leaders, showcase your company’s expertise, and build lasting relationships while supporting a thriving community.

      The ILN Scheduler

      - Personalized Scheduling: The Scheduler analyzes member preferences and creates a customized schedule, optimizing meeting times and maximizing networking efficiency.
      - Streamlined Meetings: Easily schedule one-on-one meetings and appointments, ensuring you make the most of your time at the AGM.
      - Enhanced Productivity: Identify potential partners, finalize business deals, and explore new opportunities through efficient and targeted networking.
    `,
  },
  {
    title: "Scheduled Networking Opportunities & AGMs",
    content: `
    The ILN Annual General Meeting is a cornerstone of our community, offering unparalleled opportunities for networking, business development, and social interaction.

    - Formal Business Meetings: Engage in formal business discussions, explore potential partnerships, and identify new opportunities.
    - Informal Networking: Enjoy relaxed social settings to connect with fellow members, build relationships, and foster a strong sense of community.
    - Social Events: Participate in ice-breaker activities, evening receptions, and dinners to enhance social connections and build lasting relationships.
    - Sponsorship Opportunities: Sponsor the ILN AGM and gain valuable exposure to a network of influential industry leaders, showcase your company’s expertise, and build lasting relationships while supporting a thriving community.

    The ILN Scheduler

    - Personalized Scheduling: The Scheduler analyzes member preferences and creates a customized schedule, optimizing meeting times and maximizing networking efficiency.
    - Streamlined Meetings: Easily schedule one-on-one meetings and appointments, ensuring you make the most of your time at the AGM.
    - Enhanced Productivity: Identify potential partners, finalize business deals, and explore new opportunities through efficient and targeted networking.
  `,
  },
];

/* ────────────  component  ──────────── */
const MembershipVerticals = () => (
  <div className="bg-white dark:bg-[var(--secondary-color)] text-[var(--secondary-color)] dark:text-white transition-colors duration-300">
    <Navbar />

    {/* banner */}
    <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
      <img
        src={bannerImg}
        alt="Membership Verticals"
        className="w-full h-full object-cover"
      />
    </div>

    {/* content */}
    <section className="w-11/12 md:w-5/6 mx-auto py-16 space-y-24">
      {verticals.map((item, index) => (
        <div key={index} className="space-y-8">
          {/* title */}
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] dark:text-white text-center">
            {" "}
            {item.title}
          </h3>

          {/* intro / content paragraphs */}
          {(item.content ?? "")
            .split("\n")
            .filter((p) => p.trim())
            .map((p, i) => (
              <p
                key={i}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {p.trim()}
              </p>
            ))}

          {/* Sponsor Boxes – centred, equal size, left-aligned */}
          {item.sponsors && (
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch pt-4">
              {item.sponsors.map((pkg, i) => (
                <div
                  key={i}
                  /* each card */
                  className="flex flex-col w-full rounded-2xl p-6 bg-white text-black shadow-lg border-2 border-[var(--primary-color)]"
                >
                  {/* heading */}
                  <h4 className="text-xl font-bold mb-4 text-left">
                    {pkg.tier}
                  </h4>

                  {/* features */}
                  <ul className="space-y-3 text-sm mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[var(--primary-color)]">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="mt-auto w-full py-2 rounded-md bg-[var(--primary-color)] text-black font-medium text-sm hover:opacity-90">
                    Enquire now
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* additional sponsorship opportunities */}
          {item.addons && (
            <>
              <h4 className="text-lg font-bold text-[var(--primary-color)] dark:text-white">
                Additional Sponsorship Opportunities
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {item.addons.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </>
          )}

          {/* AGM scheduler */}
          {item.scheduler && (
            <>
              <h4 className="text-lg font-bold text-[var(--primary-color)] dark:text-white pt-4">
                AGM Scheduler
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {item.scheduler.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </>
          )}

          {/* outings */}
          {item.outings && (
            <>
              <h4 className="text-lg font-bold text-[var(--primary-color)] dark:text-white pt-4">
                Unwinding & Outing Events
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {item.outings.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </section>

    <Footer />
  </div>
);

export default MembershipVerticals;
