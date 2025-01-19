import { useState } from "react";
import Layout from "@/components/Layout";
import Revolutionize from "@/components/Revolutionize";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
import {
  homeTabsContent,
  homePageContent,
  homeFeaturesFirstGridIcons,
  homeFeaturesSecGridIcons,
} from "@/data/homeData";

// tabs constant
const homeTabs = [
  {
    id: "employeeManagement",
    label: "Employee Managements",
    icon: "./img/emp-manage-icon.png",
  },
  {
    id: "attManagement",
    label: "Attendance Management",
    icon: "./img/att-mamnge-icon.png",
  },
  {
    id: "payroll",
    label: "Payroll & Financials",
    icon: "./img/payroll-manage-icon.png",
  },
  {
    id: "ats",
    label: "ATS Recruitment",
    icon: "./img/ats-rect-icon.png",
  },
  {
    id: "assets",
    label: "Assets Management",
    icon: "./img/asset-manage-icon.png",
  },
  {
    id: "softwareSettings",
    label: "Software Settings",
    icon: "./img/software-icon.png",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  // useStates
  const [activeTab, setActiveTab] = useState("employeeManagement");

  // handle navigate to page function
  const handleNavigateToPage = (route: string) => {
    navigate(route);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#303030]">
            {homePageContent?.introMainTitle}
            <span className="text-customBlueWaveyColor mx-2 font-bold">
              {homePageContent?.introSubTitle}
            </span>
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            {homePageContent?.introDescription}
          </p>
        </div>

        <Button
          className="custom-mawared-btn-style font-medium text-xl mb-12 hover:opacity-90 transition-opacity intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once"
          onClick={() => handleNavigateToPage(`/features`)}
        >
          {homePageContent?.introBtnLabel}
        </Button>

        <img
          src={homePageContent?.introImgUrl}
          alt="laptop-view"
          className="intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once"
        />

        <hr className="my-16 w-full" />

        <h3 className="font-medium text-3xl text-[#313030] text-center">
          {homePageContent?.joinEmpowerdSectionTitleFirstPart}
          <span className="font-extrabold mx-2">
            {homePageContent?.joinEmpowerdSectionNumber}
          </span>
          {homePageContent?.joinEmpowerdSectionTitleSecPart}
        </h3>

        <Button
          className="custom-mawared-btn-style font-medium text-xl my-12 hover:opacity-90 transition-opacity intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once"
          onClick={() => handleNavigateToPage(`/contact`)}
        >
          {homePageContent?.joinEmpowerdSectionBtnLabel}
        </Button>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {homePageContent?.companyLogsUrls?.map((el, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 lg:basis-1/6 pl-2 flex justify-center items-center gap-10"
              >
                <img src={el} alt="logo" height={150} width={150} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="border border-[#313030]" />

          <CarouselNext className="border border-[#313030]" />
        </Carousel>

        <hr className="my-16 w-full" />

        <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            {homePageContent?.featuresSectionTitleFirstPart}
            <span className="text-customBlueWaveyColor mx-2">
              {homePageContent?.featuresSectionTitleSecPart}
            </span>
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            {homePageContent?.featuresSectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center intersect:animate-fade-left animate-duration-700 animate-ease-linear intersect-once">
            <img
              src={homePageContent?.featuresSectionImgUrl}
              alt="iphone-view"
            />
          </div>

          <div className="grid grid-cols-2 intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once">
            <div className="flex flex-col justify-center items-center">
              {homeFeaturesFirstGridIcons?.map((el, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 justify-center items-center mb-12"
                >
                  <img src={el?.imgUrl} alt="att-icon" />
                  <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                    {el?.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center items-center">
              {homeFeaturesSecGridIcons?.map((el, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 justify-center items-center mb-12"
                >
                  <img src={el?.imgUrl} alt="att-icon" />
                  <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                    {el?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-start-2 lg:flex justify-center items-center hidden intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
            <Button
              className="custom-mawared-btn-style font-medium text-base lg:text-xl mb-12 w-1/2 hover:opacity-90 transition-opacity"
              onClick={() => handleNavigateToPage(`/features`)}
            >
              {homePageContent?.featuresSectionBtnLabel}
            </Button>
          </div>
        </div>

        <hr className="my-16 w-full" />

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            {homePageContent?.joinSectionTitleFirstPart}
            <span className="text-customBlueWaveyColor mx-2">
              {homePageContent?.joinSectionTitleSecPart}
            </span>
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            {homePageContent?.joinSectionDescription}
          </p>
        </div>

        <div className="mb-12 intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
          <img src={homePageContent?.joinSectionImgUrl} alt="reasons-img" />
        </div>
      </div>

      <div className="hidden lg:block custom-linear-bg-blue-wavy-color-style py-16 px-60 mb-24 h-96">
        <div className="grid grid-cols-2 relative">
          <div className="text-center mb-12 intersect:animate-fade-right animate-duration-700 animate-ease-in-out intersect-once">
            <h2 className="text-4xl font-semibold text-white">
              Your HR Office in Your Pocket
            </h2>

            <p className="text-white font-medium text-xl mt-8">
              Designed for convenience, the Mawared HR App ensures you never
              miss anything in managing your workforce. Empower your team with
              the Mawared HR Mobile App. Whether on Android, iOS, or Huawei,
              handle your HR tasks seamlessly—anytime, anywhere.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.qu_attendance"
                target="_blank"
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src="./img/google-play-icon.png"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>

              <a
                href="https://apps.apple.com/us/app/mawared-hr/id1572304856"
                target="_blank"
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src="./img/apple-store-icon.png"
                  alt="Download on App Store"
                  className="h-12"
                />
              </a>

              <a
                href="https://install.appcenter.ms/users/aelbawab-arabiclocalizer.com/apps/serene-hr/distribution_groups/public/releases/12"
                target="_blank"
                className="hover:opacity-90 transition-opacity"
              >
                <img
                  src="./img/app-gallery-icon.png"
                  alt="Explore it on AppGallery"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <div className="absolute right-0 -bottom-[115px] intersect:animate-fade-right animate-duration-700 animate-ease-in-out intersect-once">
            <img src="./img/app-mobile-img.png" alt="app-mobile-img" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            Powerful
            <span className="text-customBlueWaveyColor mx-2">Features</span>
            that elevate HR Management
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-12">
          {homeTabs?.map((tab) => (
            <div
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex flex-col gap-2 justify-center items-center p-8 text-center rounded-2xl cursor-pointer ${
                activeTab === tab?.id
                  ? "bg-customBlueWaveyColor"
                  : "bg-[#292D320D]"
              }`}
            >
              <img src={tab?.icon} alt="tab-icon" />
              <h2
                className={`text-lg lg:text-xl font-medium  ${
                  activeTab === tab?.id ? "text-white" : "text-[#303030]"
                }`}
              >
                {tab?.label}
              </h2>
            </div>
          ))}
        </div>

        {homeTabsContent[activeTab as keyof typeof homeTabsContent]?.map(
          (item, index) => (
            <div className="grid lg:grid-cols-2 mt-20" key={index}>
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <h3 className="text-3xl font-semibold text-[#303030] mb-8">
                  {item?.title}
                </h3>
                <p className="text-xl font-normal text-[#303030] break-all">
                  {item?.content}
                </p>
              </div>

              <div className="flex justify-end items-center">
                <img src={item?.imgUrl} alt="icon-managment" />
              </div>
            </div>
          )
        )}

        <hr className="my-16 w-full" />

        <div className="flex justify-center items-center my-12 intersect:animate-fade-right animate-duration-700 animate-ease-linear">
          <img src="./img/flexibility-view.png" alt="flexibility-view" />
        </div>

        <hr className="my-16 w-full" />

        {/* <div className="text-center mb-16 intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            What
            <span className="text-customBlueWaveyColor mx-2">Our Clients</span>
            Are Saying
          </h2>
        </div>

        <div className="w-full intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-base lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-base lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-base lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-base lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-base lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-base lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-base lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-base lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-base lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-base lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-base lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-base lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="border border-[#313030]" />

            <CarouselNext className="border border-[#313030]" />
          </Carousel>
        </div>

        <hr className="my-16 w-full" /> */}

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            {homePageContent?.globeSectionTitleFirstPart}
            <span className="text-customBlueWaveyColor mx-2">
              {homePageContent?.globeSectionTitleSecPart}
            </span>
          </h2>
        </div>

        <div className="flex justify-center items-center my-12 intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
          <img src={homePageContent?.globeSectionImgUrl} alt="globe" />
        </div>

        <hr className="my-16 w-full" />

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            {homePageContent?.trustedSectionTitleFirstPart}
            <span className="text-customBlueWaveyColor mx-2">
              {homePageContent?.trustedSectionTitleSecPart}
            </span>
            {homePageContent?.trustedSectionTitleThirdPart}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {homePageContent?.companyLogsUrls?.map((el, index) => (
            <div className="flex justify-center items-center">
              <img key={index} src={el} alt="logo" height={75} width={170} />
            </div>
          ))}
        </div>

        <hr className="my-16 w-full" />

        {/* Start of Revolutionize component  */}
        <Revolutionize />
        {/* End of Revolutionize component  */}
      </div>
    </Layout>
  );
};

export default HomePage;
