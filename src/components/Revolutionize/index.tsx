import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Revolutionize = () => {
  const navigate = useNavigate();

  // handle navigate to page function
  const handleNavigateToPage = () => {
    navigate(`/contact`);
  };

  return (
    <div className="flex flex-col justify-center items-center intersect:animate-fade-right animate-duration-700 animate-ease-linear">
      <div className="text-center mb-12">
        <h2 className="text-xl lg:text-4xl font-bold text-[#303030] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
          Let’s Revolutionize Your
          <span className="text-customBlueWaveyColor mx-2">HR Together!</span>
          <img
            src="./img/rocket-icon.png"
            alt="rocket-icon"
            className="h-10 mx-2 animate-pulse"
          />
        </h2>

        <p className="text-[#303030] font-medium text-lg lg:text-2xl mt-12">
          Leave your contact details, and one of our support team members will
          reach out to you shortly. We’ll guide you through our platform, answer
          any questions you have, and help you get started with a personalized
          demo.
        </p>
      </div>

      <Button
        className="custom-mawared-btn-style font-medium text-base lg:text-xl mt-4 hover:opacity-90 transition-opacity"
        onClick={handleNavigateToPage}
      >
        Book a free demo
      </Button>
    </div>
  );
};

export default Revolutionize;
