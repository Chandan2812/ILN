import { useEffect, useState } from "react";
// import logo from "../assets/ILN_logo-01.png";
import logo1 from "../assets/ILN Logo v2.png";
const baseURL = import.meta.env.VITE_API_BASE_URL;
import Swal from "sweetalert2";

interface JoinFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InputField = ({ label, name, value, onChange, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      {...props}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition"
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      {...props}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition"
    />
  </div>
);

const MultiSelectField = ({ label, options, selected, setSelected }: any) => {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o: string) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 p-2 flex flex-wrap gap-2">
        {options.map((option: string) => (
          <button
            type="button"
            key={option}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              selected.includes(option)
                ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)]"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300"
            }`}
            onClick={() => toggleOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const JoinFormPopup: React.FC<JoinFormPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const [verticals, setVerticals] = useState<string[]>([]);
  // const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    legalStructure: "",
    establishmentDate: "",
    building: "",
    street: "",
    area: "",
    landmark: "",
    poBox: "",
    state: "",
    country: "",
    telephone: "",
    email: "",
    companyProfile: "",
    contactName: "",
    designation: "",
  });
  const [loading, setLoading] = useState(false);
  const [_errorMsg, setErrorMsg] = useState("");

  const businessOptions = [
    "Freight Forwarding & Customs Brokers",
    "Supply Chain",
    "Cold Chain – Pharma & Perishables",
    "E-commerce & Express Handlers",
    "Aerospace & AOG",
    "Fine Art & Antiques Logistics",
    "Professional Packers & Movers – Relocations",
    "Events & Exhibition Handlers",
    "Oil & Gas and Renewable Energy",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Prevent alphabets in telephone field
    if (name === "telephone") {
      const filteredValue = value.replace(/[A-Za-z]/g, ""); // remove letters
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(`${baseURL}/api/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, businessVerticals: verticals }),
      });

      const data = await response.json();
      if (response.ok) {
        setFormData({
          companyName: "",
          legalStructure: "",
          establishmentDate: "",
          building: "",
          street: "",
          area: "",
          landmark: "",
          poBox: "",
          state: "",
          country: "",
          telephone: "",
          email: "",
          companyProfile: "",
          contactName: "",
          designation: "",
        });
        setVerticals([]);
        setLoading(false);

        // ✅ Show SweetAlert
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          html: `
    <p>Your member application has been submitted successfully.</p>
    <p class="mt-2">We’ve also sent an email with further instructions. Please check your inbox and share the required documents for verification.</p>
  `,
          confirmButtonColor: "var(--primary-color)",
          confirmButtonText: "Got it",
        }).then(() => {
          onClose(); // 👈 Close the popup after user clicks OK
        });
      } else {
        const errorMessage = data?.error || "Something went wrong.";
        setErrorMsg(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: errorMessage,
          confirmButtonColor: "var(--primary-color)",
          confirmButtonText: "Try Again",
        });
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[9999] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute top-0 left-0 h-full bg-white dark:bg-black w-full max-w-4xl overflow-y-auto transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 md:p-10 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold text-gray-700 dark:text-gray-200"
          >
            &times;
          </button>
          <div className="flex items-center justify-between mb-8">
            <img
              src={logo1}
              alt="Join the ILN Network"
              className="h-16 md:h-24"
            />
            <h2 className="text-xl md:text-3xl font-bold text-center flex-1 text-[var(--primary-color)]">
              Join the ILN Network
            </h2>
          </div>

          <form
            className="space-y-8 text-sm text-black dark:text-white"
            onSubmit={handleSubmit}
          >
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Company Name *"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Legal Structure *"
                name="legalStructure"
                value={formData.legalStructure}
                onChange={handleChange}
                required
              />
              <InputField
                label="Date of Establishment *"
                name="establishmentDate"
                type="date"
                value={formData.establishmentDate}
                onChange={handleChange}
                required
              />
            </section>

            <fieldset className="border border-gray-300 dark:border-gray-700 rounded-xl p-6">
              <legend className="px-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Registered Office
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <InputField
                  label="Building Name & Office Number *"
                  name="building"
                  value={formData.building}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Street *"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Area *"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Nearest Landmark"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
                <InputField
                  label="PO Box"
                  name="poBox"
                  value={formData.poBox}
                  onChange={handleChange}
                />
                <InputField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
                <InputField
                  label="Country *"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </fieldset>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Telephone *"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email ID *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </section>

            <MultiSelectField
              label="Business Verticals * (Note: Select only those that apply)"
              options={businessOptions}
              selected={verticals}
              setSelected={setVerticals}
            />

            <TextareaField
              label="Company Profile (Not Exceeding 500 words)*"
              name="companyProfile"
              value={formData.companyProfile}
              onChange={handleChange}
              rows={4}
              required
            />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Name *"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Designation *"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </section>

            <button
              type="submit"
              className="mt-4 bg-[var(--primary-color)] text-white px-8 py-3 rounded-md font-semibold hover:brightness-110 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
      {/* {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )} */}
    </div>
  );
};

export default JoinFormPopup;

// const SuccessModal = ({ onClose }: { onClose: () => void }) => (
//   <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
//     <div className="bg-white dark:bg-black p-8 rounded-xl shadow-xl text-center space-y-4 max-w-sm w-full">
//       <h2 className="text-xl font-bold text-[var(--primary-color)]">
//         Success!
//       </h2>
//       <p className="text-gray-700 dark:text-gray-300">
//         Your member application has been submitted successfully.
//       </p>
//       <button
//         onClick={onClose}
//         className="mt-4 bg-[var(--primary-color)] text-white px-6 py-2 rounded-md font-semibold hover:brightness-110 transition"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );
