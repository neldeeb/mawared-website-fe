import { useState } from "react";
import Layout from "@/components/Layout";
import { faqData } from "@/data/faqData";
import FaqAccordion from "@/components/FaqAccordion";

// tabs constant
const tabs = [
  { id: "general", label: "General Questions" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing and Plans" },
  { id: "support", label: "Support and Security" },
];

const FAQPage = () => {
  // useStates
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Layout>
      <div className="p-11 lg:p-24">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#303030]">
            Frequently Asked
            <span className="text-customBlueWaveyColor mx-2">Questions</span>
            (FAQ)
          </h1>

          <div className="flex flex-wrap my-8 justify-center">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`py-4 px-9 text-base lg:text-lg ${
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

        {/* start of faq accodrion component */}
        {faqData[activeTab as keyof typeof faqData]?.map((item, index) => (
          <FaqAccordion
            key={index}
            question={item?.question}
            answer={item?.answer}
          />
        ))}
        {/* end of faq accodrion component */}
      </div>
    </Layout>
  );
};

export default FAQPage;
