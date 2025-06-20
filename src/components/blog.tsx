import Slider from "react-slick";
import blogsData from "../data/blogsData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // If you use global fonts or custom classes

const Insights = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true, // make sure this is true so it loops
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds per slide
    appendDots: (dots: React.ReactNode) => (
      <div className="flex justify-center mt-4 gap-2">{dots}</div>
    ),
  };

  return (
    <div className="px-4 py-10 bg-[var(--bg-color2)] dark:bg-[var(--bg-color1)] font-['PT_Serif'] dark:text-white  text-[var(--secondary-color)]  font-raleway font-light dark:font-thin gradient-top relative">
      <h2 className="text-center text-3xl font-thin">INSIGHTS</h2>

      {/* Slider Section */}
      <div className="w-full md:w-5/6 mx-auto mt-8">
        <Slider {...settings}>
          {blogsData.slice(0, 4).map((item, i) => (
            <div key={i}>
              <div className="border border-gray-300 dark:border-gray-600 flex flex-col lg:flex-row w-full h-full overflow-hidden bg-white dark:bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full lg:w-1/2 h-full object-cover"
                  draggable={false}
                />
                <div className="p-8 flex flex-col justify-center w-full bg-[var(--bg-color2)] dark:bg-[var(--bg-color1)]">
                  <h3 className="text-2xl font-thin">{item.title}</h3>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {item.date}
                  </p>
                  <a
                    href="/viewblogs"
                    className="mt-6 rounded-tl-2xl rounded-br-2xl bg-[var(--primary-color)] text-white text-md font-light hover:opacity-70 px-6 py-2 uppercase tracking-wide transition w-fit inline-block"
                  >
                    All Blogs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Insights;
