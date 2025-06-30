import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MembershipVerticals from "./pages/MembershipVerticals";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Newsfeed from "./pages/Newsfeed";
import Blog from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/membership-verticals" element={<MembershipVerticals />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
