import Layout from "@/components/Layout";
import Revolutionize from "@/components/Revolutionize";
import {
  aboutPageContent,
  ourValues,
  ourMissionVision,
} from "@/data/aboutData";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center pt-24 gap-10">
        <img
          src={aboutPageContent?.introFirstSideImgUrl}
          alt="our-company-img-left"
          className="hidden lg:block"
        />

        <div className="text-center mx-10 md:mx-0">
          <h2 className="text-2xl lg:text-5xl font-semibold text-[#191919] mb-16">
            {aboutPageContent?.introMainTitle}
          </h2>
          <p className="text-xs lg:text-xl font-normal">
            {aboutPageContent?.introFirstSectionDescription}
            <span className="font-bold mx-2">
              {aboutPageContent?.introBoldFirstSectionDescription}
            </span>
            {aboutPageContent?.introSecSectionDescription}
            <span className="font-bold mx-2">
              {aboutPageContent?.introBoldSecondSectionDescription}
            </span>
            {aboutPageContent?.introThirdSectionDescription}
          </p>
        </div>

        <img
          src={aboutPageContent?.introSecSideImgUrl}
          alt="our-company-img-rigth"
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center my-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#191919]">
            {aboutPageContent?.secIntroTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-24">
          {ourValues?.map((el, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <img src={el?.imgUrl} alt="our-mission-vision" />
              <h2 className="text-sm lg:text-2xl font-semibold text-[#313030]">
                {el?.title}
              </h2>

              <p className="font-medium text-sm lg:text-base text-center text-[#313030]">
                {el?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          {ourMissionVision?.map((el, index) => (
            <div
              key={index}
              className="custom-features-card-style flex flex-col gap-6 justify-center items-center p-10"
            >
              <img src={el?.imgUrl} alt="our-mission-icon" />
              <h2 className="text-sm lg:text-2xl font-semibold text-[#313030] text-center">
                {el?.title}
                <div>{el?.secTitle}</div>
              </h2>

              <p className="font-medium text-sm lg:text-base text-[#313030] text-center">
                {el?.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-[#191919] mb-12">
            Meet our team
          </h2>

          <p className="text-2xl font-normal text-[#313030]">
            Introduce key team members or describe your team culture (e.g., “Our
            team comprises experienced professionals dedicated to providing
            exceptional service and innovation in HR management.”).
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 mb-40 gap-16">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="./img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-sm lg:text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>
        </div> */}

        {/* <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-[#191919] mb-12">
            Join Mawared HR
            <span className="text-customBlueWaveyColor mx-2">team</span>
          </h2>
          <p className="text-2xl font-normal">
            Join our team and be a part of the future of HR technology! At
            Mawared HR,
            <span className="font-semibold mx-2">
              We’re always looking for talented individuals who are eager to
              contribute, grow, and help businesses thrive.
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center mb-20">
          <img src="./img/join.png" alt="join" />
        </div>

        <Button className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-xs lg:text-xl mb-40">
          Discover our careers
        </Button> */}

        {/* Start of Revolutionize component  */}
        <Revolutionize />
        {/* End of Revolutionize component  */}
      </div>
    </Layout>
  );
};

export default AboutUsPage;
