import { Button } from "@/components/ui/button";

const Revolutionize = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#303030] flex items-center justify-center">
          Let’s Revolutionize Your
          <span className="text-customBlueWaveyColor mx-2">HR Together!</span>
          <img
            src="/img/rocket-icon.png"
            alt="rocket-icon"
            className="h-10 mx-4"
          />
        </h2>

        <p className="text-[#303030] font-medium text-2xl mt-12">
          Leave your contact details, and one of our support team members will
          reach out to you shortly. We’ll guide you through our platform, answer
          any questions you have, and help you get started with a personalized
          demo.
        </p>
      </div>

      <Button className="custom-mawared-btn-style font-medium text-xl mt-4">
        Book a free demo
      </Button>
    </div>
  );
};

export default Revolutionize;
