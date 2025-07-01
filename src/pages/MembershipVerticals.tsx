import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bannerImg from "../assets/verticals/membership verticals.jpg";
import { useState } from "react";

interface Vertical {
  title: string;
  content: string;
}

const verticals: Vertical[] = [
  {
    title: "Freight Forwarding & Customs Brokers",
    content: `
      In today’s interconnected world, businesses are increasingly reliant on efficient and reliable global logistics. Freight Forwarders and Customs Brokers play a vital role in navigating the complexities of international trade, ensuring seamless movement of goods across borders.

      Leveraging a global network of partners, ILN empowers Freight Forwarders and Customs Brokers to:
      - Expand their global reach: Access new markets and customers worldwide.
      - Enhance service offerings: Collaborate with other members to provide comprehensive and integrated logistics solutions.
      - Gain a competitive edge: Compete effectively with global integrators and multinational corporations.

      ILN invites experienced Freight Forwarders and Customs Brokers to join our dynamic community and unlock a world of opportunities.
    `,
  },
  {
    title: "Contract Logistics & Supply Chain",
    content: `
      Boosting Global Competitiveness: Contract Logistics & Supply Chain:

      Warehousing excellence is paramount in today’s dynamic supply chains. Businesses increasingly rely on 3PL providers equipped with cutting-edge technology to streamline operations and gain a competitive edge.

      Key requirements for modern warehouses include:
      - Advanced Material Handling: Robust fleets of lift trucks, integrated AGV systems, and efficient conveyor systems.
      - Intelligent Inventory Management: Systematized racking solutions, sophisticated WMS automation, and real-time inventory tracking with RFID and AI.
      - Enhanced Security: Comprehensive CCTV surveillance and robust security protocols.

      ILN invites leading 3PL companies to collaborate with our global network of Member Partners. By leveraging the strengths of these partnerships, businesses can optimize their supply chains, reduce costs, and effectively compete with multinational giants in the global marketplace.
    `,
  },
  {
    title: "Cold Chain – Pharma & Perishables",
    content: `
      Cold Chain Logistics: Optimizing Pharma & Perishables Distribution:

      Food & Beverage and Healthcare companies face the critical challenge of maintaining the integrity of temperature-sensitive products throughout their global supply chains. This necessitates a robust and efficient Cold Chain logistics solution. To effectively focus on core business activities like forecasting, planning, and supply chain visibility, these companies increasingly rely on 3PL Cold Chain Logistics    providers.

      Leading 3PLs offer services like:
      - Inventory Optimization: Leveraging advanced Warehouse Management Systems (WMS) to minimize waste and maximize efficiency.
      - Transportation Management: Ensuring timely and secure delivery across various modes (air, sea, land).
      - Supply Chain Security: Implementing robust measures to safeguard products from theft, contamination, and other risks.
      - Corporate Social Responsibility: Adhering to environmental and ethical standards throughout the supply chain.

      ILN invites 3PL companies specializing in Cold Chain transportation, meeting the highest industry standards, to join their global platform and collaborate with Member Partners worldwide.
    `,
  },
  {
    title: "E-commerce & Express Handlers",
    content: `
      E-commerce & Express Handlers: Fueling Growth in a Rapidly Evolving Market:

      Express Handlers have become indispensable players in the thriving e-commerce landscape. The surge in online shopping has fueled a demand for faster, more efficient transportation and delivery of a diverse range of goods, including FMCG, perishables, and manufactured products. Modern technologies and innovative last-mile delivery services are revolutionizing the industry, enabling businesses to gain a competitive edge. These services are constantly evolving, driving companies to explore new strategies for enhancing efficiency and minimizing costs.

      ILN invites prominent express companies worldwide to leverage our global platform and cutting-edge last-mile delivery solutions to effectively meet the dynamic demands of the global e-commerce market.
    `,
  },
  {
    title: "Aerospace & AOG",
    content: `
    Ensuring Uninterrupted Operations: Aerospace & AOG Logistics:

    In the dynamic world of aerospace and aviation, timely and reliable logistics are paramount. The aerospace, defense, and their suppliers face the critical challenge of managing the flow of time-sensitive and often mission-critical components across global supply chains.

    ILN invites Aerospace and AOG Handlers with 24/7 operations to join our global platform. By collaborating with ILN, these specialized logistics providers can:
    - Enhance Operational Efficiency: Streamline supply chains, minimize downtime, and ensure 
      the uninterrupted operation of aircraft and defense systems.
    - Expand Global Reach: Connect with a wider network of aerospace and defense companies, 
      creating new opportunities for business growth.
    - Improve Customer Service: Deliver critical components with speed and reliability, 
      enhancing customer satisfaction and building strong relationships.

  `,
  },
  {
    title: "Fine Arts & Antiques Logistics",
    content: `
    Safeguarding Cultural Treasures: Fine Arts & Antiques Logistics:

    The transportation of fine art and antiques demands meticulous attention to detail and specialized expertise. These valuable and often irreplaceable items require:
    - Expert Handling: Trained professionals with a deep understanding of art handling techniques.
    - Custom Packaging: Bespoke packaging solutions designed to provide maximum protection during transit.
    - Climate-Controlled Environments: Maintaining optimal temperature and humidity levels to preserve the integrity of artworks.
    - Secure Transportation: Utilizing secure and reliable transportation methods to ensure the safe arrival of each piece.

    ILN invites specialized logistics companies with expertise in fine art and antiques transportation to join our global platform. By collaborating with ILN, these companies can:
    - Access a Global Network: Connect with art collectors, galleries, museums, and auction houses worldwide.
    - Showcase Their Expertise: Highlight their specialized services and build trust with potential clients.
    - Expand Their Business: Gain access to new opportunities and grow their presence in the global art market.
  `,
  },
  {
    title: "Professional Packers & Movers",
    content: `
    Seamless Global Relocations:

    In today’s interconnected world, people are constantly on the move. Whether it’s an international job transfer, a new employment opportunity, or a personal migration, relocation can be a complex and stressful experience.

    ILN invites professional relocation companies and skilled packing/packaging services to join our global platform. By collaborating with ILN, these companies can:
    - Connect with a Global Client Base: Access a wider network of individuals and families seeking relocation services.
    - Showcase Their Expertise: Highlight their specialized services, including packing of hazardous and dangerous goods, 
      event and exhibition logistics, and project and oilfield supplies.
    - Offer Integrated Solutions: Provide comprehensive relocation services, from initial consultation and packing/packaging 
      to final delivery and settling-in assistance.
    - Gain a Competitive Edge: Differentiate themselves in a competitive market by offering innovative and client-centric relocation solutions.
  `,
  },
  {
    title: "Events & Exhibition Logistics",
    content: `
    The global events industry is thriving, encompassing a diverse range of experiences from concerts and sporting events to trade shows and exhibitions. These dynamic events require meticulous planning and seamless execution to ensure success.

    ILN invites professional event and exhibition management companies to join our global platform. By collaborating with ILN, these companies can:
    - Connect with Global Clients: Access a wider network of event organizers, venues, and exhibitors worldwide.
    - Showcase Their Expertise: Highlight their specialized services, including event planning, logistics, 
      venue sourcing, and on-site management.
    - Expand Their Business: Gain access to new opportunities and grow their presence in the global events market.
    - Collaborate with Industry Professionals: Connect with other industry professionals, such as venue managers, 
      caterers, and entertainment providers, to build strong partnerships.
  `,
  },
  {
    title: "Oil & Gas and Renewable Energy",
    content: `
    The Energy sector supply chains matter now more than ever: 
    Energy companies have broadened their logistics supplier base, searching for lower prices, while others have taken the opposite approach, to be more sustainable: increasing the scope of the logistics services they outsource and partnering with service providers.

    These forward-looking companies are seeking ways to consolidate their many separate supply chains, co-locating materials in central storage hubs.

    ILN invites on their global platform, experienced and professionally managed energy sector handlers.
  `,
  },
];

/* ────────────  component  ──────────── */
const MembershipVerticals = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
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

      <section className="w-11/12 md:w-5/6 mx-auto py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          {/* Left - Cards for Verticals */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4 dark:text-white">
              Membership Verticals
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {verticals.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`cursor-pointer rounded-xl border-2 px-4 py-1 text-center transition-all duration-300 shadow hover:shadow-lg ${
                    selectedIndex === index
                      ? "border-[var(--primary-color)] bg-[var(--primary-color)] text-white font-semibold"
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
                  }`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
              {verticals[selectedIndex].title}
            </h3>

            {verticals[selectedIndex].content
              .split("\n")
              .filter((para) => para.trim() !== "")
              .map((para, i) => {
                const trimmed = para.trim();

                if (trimmed.startsWith("-")) {
                  return (
                    <ul
                      key={i}
                      className="list-disc list-inside text-gray-700 dark:text-gray-300 pl-4"
                    >
                      <li className="mb-2">{trimmed.replace(/^-\s*/, "")}</li>
                    </ul>
                  );
                } else if (trimmed.endsWith(":")) {
                  return (
                    <p
                      key={i}
                      className="font-semibold text-lg text-gray-800 dark:text-white"
                    >
                      {trimmed}
                    </p>
                  );
                } else {
                  return (
                    <p
                      key={i}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {trimmed}
                    </p>
                  );
                }
              })}
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-[var(--primary-color)] mb-12">
          Conference Sponsorships
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Platinum Sponsor */}
          <div className="bg-[#f5faff] border-l-4 border-blue-400 rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              PLATINUM SPONSOR
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              ILN Member / External Sponsor (Airlines, Shipping Lines,
              Charterers, Industry Consultants)
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm">
              <li>Suite or a Meeting Pod Package</li>
              <li>1 Free ILN AGM Conference Pass</li>
              <li>Full graphics design and printing for booth panels</li>
              <li>One Suite/Pod structure measuring 3.0m x 2.0m x 1.5m</li>
              <li>Complimentary booth setup and removal</li>
              <li>Suite/Pod space</li>
              <li>Table counter with 1 chair</li>
              <li>Meeting table with 3 chairs</li>
              <li>Fascia with company name and booth number (Text Only)</li>
              <li>Booth carpeting</li>
              <li>Booth lighting</li>
              <li>1 power socket</li>
              <li>1 waste bin</li>
            </ul>
          </div>

          {/* Gold Sponsor */}
          <div className="bg-[#fffaf3] border-l-4 border-yellow-400 rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">
              GOLD SPONSOR
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              ILN Member / External Sponsor (Airlines, Shipping Lines,
              Charterers, Industry Consultants)
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm">
              <li>Suite or a Meeting Pod Package</li>
              <li>1 Free ILN AGM Conference Pass</li>
              <li>Full graphics design and printing for booth panels</li>
              <li>One Suite/Pod structure measuring 2.0m x 1.0m x 1.5m</li>
              <li>Complimentary booth setup and removal</li>
              <li>Suite/Pod space</li>
              <li>Table counter with 1 chair</li>
              <li>Fascia with company name and booth number (Text Only)</li>
              <li>Booth carpeting</li>
              <li>Booth lighting</li>
              <li>1 power socket</li>
              <li>1 waste bin</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MembershipVerticals;
