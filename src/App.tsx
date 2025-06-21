import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MembershipVerticals from "./pages/MembershipVerticals";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/membership-verticals" element={<MembershipVerticals />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
