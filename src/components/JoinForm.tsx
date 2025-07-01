import { useEffect, useState } from "react";

interface JoinFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InputField = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition"
    />
  </div>
);

const TextareaField = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <textarea
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
          <h2 className="text-3xl font-bold mb-8 text-[var(--primary-color)]">
            Join the ILN Network
          </h2>

          <form className="space-y-8 text-sm text-black dark:text-white">
            {/* Company Info */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Company Name *" required />
              <InputField label="Legal Structure *" required />
              <InputField
                label="Date of Establishment *"
                type="date"
                required
              />
            </section>

            {/* Registered Office */}
            <fieldset className="border border-gray-300 dark:border-gray-700 rounded-xl p-6">
              <legend className="px-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Registered Office
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <InputField label="Building Name & Office Number *" required />
                <InputField label="Street *" required />
                <InputField label="Area *" required />
                <InputField label="Nearest Landmark" />
                <InputField label="PO Box" />
                <InputField label="State" />
                <InputField label="Country *" required />
              </div>
            </fieldset>

            {/* Contact Info */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Telephone *" required />
              <InputField label="Email ID *" type="email" required />
            </section>

            <MultiSelectField
              label="Business Verticals * (Note: Select only those that apply)"
              options={businessOptions}
              selected={verticals}
              setSelected={setVerticals}
            />

            <TextareaField label="Company Profile *" rows={4} required />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Name *" required />
              <InputField label="Designation *" required />
            </section>

            <button
              type="submit"
              className="mt-4 bg-[var(--primary-color)] text-white px-8 py-3 rounded-md font-semibold hover:brightness-110 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinFormPopup;
