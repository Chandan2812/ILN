import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const baseURL = import.meta.env.VITE_API_BASE_URL;

type AgmType = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
};

const Agm: React.FC = () => {
  const [agm, setAgm] = useState<AgmType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgm = async () => {
      try {
        const res = await axios.get<AgmType[]>(`${baseURL}/agm`);
        if (res.data && res.data.length > 0) {
          setAgm(res.data[0]); // show first/latest AGM
        }
      } catch (err) {
        console.error("Failed to load AGM content", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgm();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Loading AGM content...</p>
      </div>
    );
  }

  if (!agm) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">No AGM content available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <div className="w-11/12 md:w-5/6 mx-auto px-4 py-10">
        <h1 className="text-center text-3xl font-bold text-[var(--primary-color)] mb-2">
          {agm.title}
        </h1>
        <p className="text-center text-xl mt-5 text-gray-600 dark:text-gray-300 mb-6">
          {agm.subtitle}
        </p>
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:my-2 prose-p:my-2 prose-li:my-1">
          <div dangerouslySetInnerHTML={{ __html: agm.content }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agm;
