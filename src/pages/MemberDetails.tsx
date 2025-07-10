import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface Member {
  _id: string;
  companyName: string;
  legalStructure: string;
  establishmentDate: string;
  building: string;
  street: string;
  area: string;
  landmark: string;
  poBox: string;
  state: string;
  country: string;
  telephone: string;
  email: string;
  website?: string;
  businessVerticals: string;
  companyProfile: string;
  contactName: string;
  designation: string;
  logoUrl: string;
}

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}/api/members/${id}`).then((res) => {
      setMember(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!member) return <div className="p-10 text-center">Member not found</div>;

  return (
    <div className="bg-white dark:bg-[var(--secondary-color)] text-black dark:text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          {/* Logo */}
          <div className="w-full flex justify-center">
            <div className="w-64 h-64 bg-white dark:bg-gray-700 border rounded-xl flex items-center justify-center overflow-hidden">
              {member.logoUrl ? (
                <img
                  src={member.logoUrl}
                  alt={member.companyName}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <span className="text-sm text-gray-400">No Logo</span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <h1 className="text-3xl font-bold">{member.companyName}</h1>

            <div>
              <strong>Address:</strong>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {[member.building, member.street, member.area]
                  .filter(Boolean)
                  .join(", ")}
                <br />
                {member.state}, {member.country}
                {member.poBox && `, PO Box: ${member.poBox}`}
              </p>
            </div>

            <p>
              <strong>Phone:</strong> {member.telephone}
            </p>
            <p>
              <strong>Email:</strong> {member.email}
            </p>
            {member.website && (
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  {member.website}
                </a>
              </p>
            )}

            <p>
              <strong>Established:</strong>{" "}
              {new Date(member.establishmentDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Verticals */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Specialized Verticals</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {JSON.parse(member.businessVerticals).map(
              (v: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-[var(--bg-color1)] text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full"
                >
                  {v}
                </span>
              )
            )}
          </div>
        </div>

        {/* Profile */}
        {member.companyProfile && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Company Profile</h2>
            <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {member.companyProfile}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MemberDetails;
