import { homePageContent } from "@/data/homeData";

const PartnerSection: React.FC = () => {
  const stats = [
    { value: "500+", label: "Clients world-wide" },
    { value: "4500+", label: "Client locations" },
    { value: "14,000+", label: "Active users" },
    { value: "9M+", label: "Sign\nin/out records" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-5 py-40 xl:px-6 xl:py-44">
      <div className="text-center mb-8">
        <h2 className="text-xl lg:text-4xl font-bold text-[#303030] mb-2">
          {homePageContent?.trustedSectionTitleFirstPart}
          {/* <br className="flex lg:hidden" /> */}
          <span className="text-customBlueWaveyColor mx-2">
            {homePageContent?.trustedSectionTitleSecPart}
          </span>
          {homePageContent?.trustedSectionTitleThirdPart}
        </h2>

        <p className="font-medium text-[#5A5959] text-sm lg:text-lg">
          {homePageContent?.trustedSectionDescription}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
        {stats?.map((stat, index) => (
          <div key={index} className="relative group">
            {/* Hexagon shape with dotted border */}
            <div className="relative w-full aspect-square">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}
              >
                <polygon
                  points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                  fill="transparent"
                  stroke="#1997e1"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="transform-origin-center"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-11 lg:p-4">
                <span className="text-center text-[#313030] sm:text-xl lg:text-base font-medium mb-2">
                  {stat?.label}
                </span>
                <span className="text-center text-[#313030] sm:text-xl lg:text-[32px] font-bold">
                  {stat?.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        {homePageContent?.companyLogsUrls?.map((el, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={el}
              alt={`Partner ${index + 1}`}
              className="object-contain"
              height={50}
              width={170}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
