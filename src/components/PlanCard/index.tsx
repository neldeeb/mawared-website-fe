import { Button } from "@/components/ui/button";
import { PricingPlan } from "@/types/pricing";

const PlanCard = ({ name, price, description, features }: PricingPlan) => {
  return (
    <div className="custom-price-card-style flex flex-col h-full">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#303030] mb-8">{name}</h3>

        <div
          style={{
            backgroundImage:
              name?.toLowerCase() === "plus"
                ? `url(/img/middle-price-bg.png)`
                : `url(/img/price-bg.png)`,
          }}
          className="rounded-3xl p-6 bg-no-repeat bg-cover bg-center mb-8"
        >
          <div className="flex items-center justify-center">
            <span className="text-white text-6xl font-bold font-Exo">
              ${price}
            </span>
          </div>
          <p className="text-white text-lg">per user per month</p>
        </div>

        <p className="text-xl font-medium text-[#303030]">{description}</p>
      </div>

      <hr />

      <div className="flex-grow my-8 font-Exo text-base font-medium text-[#4E4E4E] capitalize">
        <ul className="space-y-4">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src="/img/check-icon.png" alt="check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <Button className="custom-price-btn-style font-semibold text-lg mt-8 uppercase">
        Get started
      </Button>
    </div>
  );
};

export default PlanCard;
