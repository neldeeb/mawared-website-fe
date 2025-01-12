import Layout from "@/components/Layout";
import PlanCard from "@/components/PlanCard";
import { pricingPlans } from "@/data/pricingData";

const PlansPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#303030]">
            Choose The
            <span className="text-customBlueWaveyColor mx-2">Perfect Plan</span>
            For Your Business
          </h2>

          <p className="text-[#303030] font-medium text-2xl mt-3">
            Discover flexible, affordable plans tailored to your business needs
            and growth.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans?.map((plan) => (
            <PlanCard key={plan?.name} {...plan} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PlansPage;
