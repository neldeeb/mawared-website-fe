import { useState } from "react";
import Layout from "@/components/Layout";

const tabs = [
  { id: "general", label: "General Questions" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing and Plans" },
  { id: "support", label: "Support and Security" },
];

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-24">
        <h1 className="text-4xl font-bold text-[#303030]">
          Frequently Asked
          <span className="text-customBlueWaveyColor mx-2">Questions</span>(FAQ)
        </h1>

        <div className="flex flex-wrap my-8 justify-center">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`py-4 px-9 text-lg ${
                activeTab === tab?.id
                  ? "custom-linear-bg-blue-wavy-color-style text-white rounded-xl"
                  : "bg-white text-[#313030]"
              }`}
            >
              {tab?.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className={
          !isOpen
            ? "custom-accordion-style mb-4 overflow-hidden"
            : "custom-accordion-style active-custom-accordion-style mb-4 overflow-hidden"
        }
      >
        <button
          className="w-full py-3 px-9 text-left flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-xl text-[#313030]">
            What is Mawared HR?
          </span>

          {isOpen ? (
            <img src="/img/arrow-down-icon.png" alt="arrow-down-icon" className="h-10" />
          ) : (
            <img src="/img/side-arrow-icon.png" alt="side-arrow-icon" className="h-16" />
          )}
        </button>

        {isOpen && (
          <div className="px-16 pb-6 font-normal text-[#313030b6] text-lg">
            Mawared HR is an all-in-one platform for automating HR processes,
            including attendance, payroll, and employee management.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FAQPage;
