import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import newsfeed from "../assets/newsfeed.jpeg";

function Newsfeed() {
  const articles = [
    {
      title:
        "With A Primitive Canoe, Scientists Replicate Prehistoric Seafaring",
      date: "June 29, 2025",
      link: "https://gcaptain.com/with-a-primitive-canoe-scientists-replicate-prehistoric-seafaring/",
    },
    {
      title: "Russia Tries Again to Expand LNG Exports Upended by Sanctions",
      date: "June 29, 2025",
      link: "https://gcaptain.com/russia-tries-again-to-expand-lng-exports-upended-by-sanctions/",
    },
    {
      title: "First Quantum Starts Shipping Stockpiled Copper From Panama Mine",
      date: "June 28, 2025",
      link: "https://gcaptain.com/first-quantum-starts-shipping-stockpiled-copper-from-panama-mine/",
    },
    {
      title:
        "“Book & Claim” is a valuable new tool to calculate scope 3 emissions",
      date: "June 27, 2025",
      link: "https://theloadstar.com/book-claim-is-a-valuable-new-tool-to-calculate-scope-3-emissions/",
    },
    {
      title:
        "Dachser’s management succession plan: Claus Wetzel named new Logistics Germany head",
      date: "June 27, 2025",
      link: "https://theloadstar.com/dachsers-management-succession-plan-claus-wetzel-named-new-logistics-germany-head/",
    },
    {
      title:
        "The Loadstar leader: A wagon train on the trail to recession in the new ‘Wild West’",
      date: "June 27, 2025",
      link: "https://theloadstar.com/the-loadstar-leader-a-waggon-train-on-the-trail-to-recession-in-the-new-wild-west/",
    },
  ];

  return (
    <div className="dark:bg-[var(--secondary-color)]">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={newsfeed}
          alt="Contact Us"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
            Newsfeed
          </h1>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-5xl  mx-auto py-10 px-4">
        <ul className="space-y-6">
          {articles.map((article, index) => (
            <li key={index} className="border-b pb-4">
              <a
                href={article.link}
                className="text-md  text-[var(--primary-color)] hover:underline block"
              >
                {article.title}
              </a>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Newsfeed;
