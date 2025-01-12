import { useState } from "react";
import { FaqAccordionProps } from "@/types/faq";

const FaqAccordion = ({ question, answer }: FaqAccordionProps) => {
  // useStates
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <span className="font-medium text-xl text-[#313030]">{question}</span>

        {isOpen ? (
          <img
            src="/img/arrow-down-icon.png"
            alt="arrow-down-icon"
            className="h-10"
          />
        ) : (
          <img
            src="/img/side-arrow-icon.png"
            alt="side-arrow-icon"
            className="h-16"
          />
        )}
      </button>

      {isOpen && (
        <div className="px-16 pb-6 font-normal text-[#313030b6] text-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
