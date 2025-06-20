import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import JoinILN from "../components/JoinILN";
import Navbar from "../components/Navbar";
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
      <Footer />
    </div>
  );
}

export default Landing;
