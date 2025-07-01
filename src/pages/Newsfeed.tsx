import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import newsfeed from "../assets/newsfeed.jpeg";
import { useState } from "react";

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

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 15;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const getPageNumbers = () => {
    const pages = [];
    const visiblePages = 2;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= visiblePages + 1) {
        for (let i = 1; i <= visiblePages + 2; i++) pages.push(i);
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - visiblePages) {
        pages.push(1, "...");
        for (let i = totalPages - (visiblePages + 1); i <= totalPages; i++)
          pages.push(i);
      } else {
        pages.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="dark:bg-[var(--secondary-color)]">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={newsfeed}
          alt="Newsfeed"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
            Newsfeed
          </h1>
        </div>
      </div>

      {/* News List */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <ul className="space-y-6">
          {currentArticles.map((article, index) => (
            <li key={index} className="border-b pb-4">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-[var(--primary-color)] hover:underline block"
              >
                {article.title}
              </a>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-2 flex-wrap">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                page === currentPage
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              } ${
                page === "..."
                  ? "cursor-default"
                  : "hover:bg-[var(--primary-color-light)] dark:hover:bg-gray-600"
              }`}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Newsfeed;
