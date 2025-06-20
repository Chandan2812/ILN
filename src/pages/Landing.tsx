import About from "../components/About";
import Insights from "../components/blog";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import JoinILN from "../components/JoinILN";
import Navbar from "../components/Navbar";
import ReviewSection from "../components/review";
import Services from "../components/Services";
import WhyWorkWithUs from "../components/WhyWorkWithUs";

function Landing() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyWorkWithUs />
      <About />
      <Services />
      <JoinILN />
      <ReviewSection />
      <Insights />
      <Footer />
    </div>
  );
}

export default Landing;
