import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import { pricingPlans } from "@/data/pricingData";

const PlansPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#303030]">
            Choose The
            <br className="flex lg:hidden" />
            <span className="text-customBlueWaveyColor mx-2">Perfect Plan</span>
            For Your Business
          </h2>

          <p className="text-[#303030] font-medium text-xs lg:text-2xl mt-3">
            Discover flexible, affordable plans tailored to your business needs
            and growth.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
          {pricingPlans?.map((plan) => (
            <PlanCard key={plan?.name} {...plan} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PlansPage;
