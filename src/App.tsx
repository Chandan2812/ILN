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
// import ContactSidebar from "./components/ContactSideBar";
import AdminPage from "./Admin/AdminPage";
import { Phone } from "lucide-react";
import JoinFormPopup from "./components/JoinForm";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import BlogDetails from "./pages/BlogDetails";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/membership" element={<MembershipVerticals />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {/* <div className="md:flex hidden">
        <ContactSidebar />
      </div> */}

      <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden">
        <a
          href="tel:+91123456789"
          className="w-1/2 bg-[var(--primary-color)] text-white text-center py-4 font-semibold  transition-all flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Call Me
        </a>
        <button
          onClick={() => setShowForm(true)}
          className="w-1/2 bg-[var(--secondary-color)] text-white text-center py-4 font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
        >
          <FaUserPlus size={20} />
          Become a Member
        </button>
      </div>
      <JoinFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
    </Router>
  );
}

export default App;
