import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { revolutionizeContent } from "@/data/contactData";

const Revolutionize = () => {
  const navigate = useNavigate();

  // handle navigate to page function
  const handleNavigateToPage = () => {
    navigate(`/contact`);
  };

  return (
    <div className="flex flex-col justify-center items-center intersect:animate-fade-right animate-duration-700 animate-ease-linear">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#303030] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {revolutionizeContent?.introMainTitle}
          <span className="text-customBlueWaveyColor mx-2">
            {revolutionizeContent?.secIntroTitle}
          </span>
          <img
            src={revolutionizeContent?.iconUrl}
            alt="rocket-icon"
            className="h-10 mx-2 animate-pulse"
          />
        </h2>

        <p className="text-[#303030] font-medium text-xs lg:text-2xl mt-12">
          {revolutionizeContent?.description}
        </p>
      </div>

      <Button
        className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-xs lg:text-xl mt-4 hover:opacity-90 transition-opacity"
        onClick={handleNavigateToPage}
      >
        {revolutionizeContent?.btnLabel}
      </Button>
    </div>
  );
};

export default Revolutionize;
