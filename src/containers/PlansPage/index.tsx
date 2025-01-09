import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const PlansPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text[#303030]">
            Choose The
            <span className="text-customBlueWaveyColor mx-2">Perfect Plan</span>
            For Your Business
          </h2>

          <p className="text-[#303030] font-medium text-2xl mt-3">
            Discover flexible, affordable plans tailored to your business needs
            and growth.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="custom-price-card-style flex flex-col h-full">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text[#303030] mb-8">
                Standard
              </h3>

              <div
                style={{ backgroundImage: `url(/img/price-bg.png)` }}
                className="rounded-3xl p-6 bg-no-repeat bg-cover bg-center mb-8"
              >
                <div className="flex items-center justify-center">
                  <span className="text-white text-6xl font-bold font-Exo">
                    $9
                  </span>
                </div>
                <p className="text-white text-lg">per user per month</p>
              </div>

              <p className="text-xl font-medium text-[#303030]">
                Get started with...
              </p>
            </div>

            <hr />

            <div className="flex-grow my-8 font-Exo text-base font-medium text-[#4E4E4E] capitalize">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <img src="/img/check-icon.png" alt="check-icon" />
                  <span>Live chat for support</span>
                </li>
              </ul>
            </div>

            <hr />

            <Button className="custom-price-btn-style font-semibold text-lg mt-8">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlansPage;
