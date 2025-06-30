import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blogHero from "../assets/h (1).jpg";
import blogImage1 from "../assets/Blog_Image_International_Port_Ship_Vessel_Containers_Ocean_5.jpg";
import blogImage2 from "../assets/aircraft-on-ground-001-1024x594.jpg";
import blogImage3 from "../assets/Heathrow35-1024x652.jpg";

const blogPosts = [
  {
    title: "The Future of Digital Marketing in 2025",
    date: "June 25, 2025",
    excerpt:
      "Explore the trends that are shaping the digital marketing industry in 2025 and how businesses can stay ahead.",
    image: blogImage1,
    link: "#",
  },
  {
    title: "Why Your Business Needs SEO Today",
    date: "June 20, 2025",
    excerpt:
      "Search Engine Optimization is no longer optional. Discover how SEO can bring lasting visibility to your brand.",
    image: blogImage2,
    link: "#",
  },
  {
    title: "Top Social Media Strategies for Small Businesses",
    date: "June 15, 2025",
    excerpt:
      "Learn the best-performing social media strategies that help small businesses grow their audience.",
    image: blogImage3,
    link: "#",
  },
];

function Blog() {
  return (
    <div className="dark:bg-[var(--secondary-color)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={blogHero}
          alt="Blog Hero"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
            Our Blog
          </h1>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {blog.excerpt}
                </p>
              </div>
              <a
                href={blog.link}
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
