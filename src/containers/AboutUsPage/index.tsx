import Layout from "@/components/Layout";
import Revolutionize from "@/components/Revolutionize";
import { Button } from "@/components/ui/button";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center pt-24 gap-10">
        <img
          src="/img/our-company-img-left.png"
          alt="our-company-img-left"
          className="hidden lg:block"
        />

        <div className="text-center mx-10 md:mx-0">
          <h2 className="text-5xl font-semibold text-[#191919] mb-16">
            Our Company
          </h2>
          <p className="text-xl font-normal">
            Mawared HR is a trusted provider of innovative
            <span className="font-bold mx-2">HR solutions,</span> helping
            businesses automate processes, improve accuracy, and engage their
            workforce. We are committed to delivering excellence, security, and
            <span className="font-bold mx-2">unmatched support</span> to our
            global clients.
          </p>
        </div>

        <img
          src="/img/our-company-img-rigth.png"
          alt="our-company-img-rigth"
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#191919]">Our Values</h2>
        </div>

        <div className="flex justify-center items-center mb-40">
          <img src="/img/our-values.png" alt="our-values" />
        </div>

        <div className="flex justify-center items-center mb-40">
          <img src="/img/our-mission-vision.png" alt="our-mission-vision" />
        </div>

        <div className="text-center mb-20">
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
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <div className="custom-team-card-style">
              <img src="/img/employee-img.png" alt="employee-img" />
            </div>
            <h3 className="text-2xl text-[#191919] font-medium my-3">
              Mohamed Ali
            </h3>
            <p className="text-base text-[#191919] font-normal">
              Senior Backend
            </p>
          </div>
        </div>

        <div className="text-center mb-20">
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
          <img src="/img/join.png" alt="join" />
        </div>

        <Button className="custom-mawared-btn-style font-medium text-xl mb-40">
          Discover our careers
        </Button>

        {/* Start of Revolutionize component  */}
        <Revolutionize />
        {/* End of Revolutionize component  */}
      </div>
    </Layout>
  );
};

export default AboutUsPage;
