import Layout from "@/components/Layout";
import Revolutionize from "@/components/Revolutionize";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center pt-24 gap-10">
        <img
          src="./img/our-company-img-left.png"
          alt="our-company-img-left"
          className="hidden lg:block"
        />

        <div className="text-center mx-10 md:mx-0">
          <h2 className="text-2xl lg:text-5xl font-semibold text-[#191919] mb-16">
            Our Company
          </h2>
          <p className="text-xs lg:text-xl font-normal">
            Mawared HR is a trusted provider of innovative
            <span className="font-bold mx-2">HR solutions,</span> helping
            businesses automate processes, improve accuracy, and engage their
            workforce. We are committed to delivering excellence, security, and
            <span className="font-bold mx-2">unmatched support</span> to our
            global clients.
          </p>
        </div>

        <img
          src="./img/our-company-img-rigth.png"
          alt="our-company-img-rigth"
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center my-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#191919]">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-24">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src="./img/innovation-icon.png" alt="our-mission-vision" />
            <h2 className="text-sm lg:text-2xl font-semibold text-[#313030]">
              Innovation
            </h2>

            <p className="font-medium text-sm lg:text-base text-center text-[#313030]">
              Continuously improving to meet our clients’ needs
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <img src="./img/real-icon.png" alt="our-mission-vision" />
            <h2 className="text-sm lg:text-2xl font-semibold text-[#313030]">
              Reliability
            </h2>

            <p className="font-medium text-sm lg:text-base text-center text-[#313030]">
              Ensuring security and uptime for seamless operations.
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <img src="./img/collab-icon.png" alt="our-mission-vision" />
            <h2 className="text-sm lg:text-2xl font-semibold text-[#313030]">
              Collaboration
            </h2>

            <p className="font-medium text-sm lg:text-base text-center text-[#313030]">
              Partnering with businesses for mutual success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <div className="custom-features-card-style flex flex-col gap-6 justify-center items-center p-10">
            <img src="./img/our-mission-icon.png" alt="our-mission-icon" />
            <h2 className="text-sm lg:text-2xl font-semibold text-[#313030] text-center">
              Our Mission
              <div>(Smarter HR solutions)</div>
            </h2>

            <p className="font-medium text-sm lg:text-base text-[#313030] text-center">
              At Mawared HR, our mission is to empower businesses by simplifying
              and automating HR processes. We aim to create innovative solutions
              that enhance efficiency, accuracy, and employee satisfaction.
            </p>
          </div>

          <div className="custom-features-card-style flex flex-col gap-6 justify-center items-center p-10">
            <img src="./img/our-vision-icon.png" alt="our-vision-icon" />
            <h2 className="text-sm lg:text-2xl font-semibold text-[#313030] text-center">
              Our Vision
              <div>(For a smarter future)</div>
            </h2>

            <p className="font-medium text-sm lg:text-base text-[#313030] text-center">
              At Mawared HR, we aim to transform HR management with intuitive,
              data-driven solutions that streamline processes and empower
              businesses to focus on growth and innovation, creating a more
              engaged and productive workforce.
            </p>
          </div>
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
