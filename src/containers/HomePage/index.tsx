import Layout from "@/components/Layout";
// import Revolutionize from "@/components/Revolutionize";
// import { Button } from "@/components/ui/button";
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
// import { useNavigate } from "react-router-dom";
import {
  homeFeaturesModules,
  homePageContent,
  homeFeaturesfirstSlide,
  homeFeaturesSecSlide,
  homeFeaturesThirdSlide,
  homeFeaturesFourthSlide,
  homeServices,
  flexabilityContent,
} from "@/data/homeData";
import ContactForm from "@/components/ContactForm";

const HomePage = () => {
  // const navigate = useNavigate();

  // handle navigate to page function
  // const handleNavigateToPage = (route: string) => {
  //   navigate(route);
  // };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div id="home-intro">
          <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
            <h2 className="text-2xl lg:text-5xl font-semibold text-[#303030]">
              <span className="text-customBlueWaveyColor mx-2 font-bold">
                {homePageContent?.introMainTitle}
              </span>

              <br className="flex lg:hidden" />

              {homePageContent?.introSubTitle}
            </h2>

            <p className="text-[#303030] font-medium text-xs lg:text-2xl mt-8">
              {homePageContent?.introDescription}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <a
              href="#contact-us"
              className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-xs lg:text-xl mb-12 hover:opacity-90 transition-opacity intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once"
              // onClick={() => handleNavigateToPage(`/contact`)}
            >
              {homePageContent?.introBtnLabel}
            </a>
          </div>

          <img
            src={homePageContent?.introImgUrl}
            alt="laptop-view"
            className="intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once mb-40"
          />
        </div>

        <div id="join-empowred">
          <h3 className="font-medium text-2xl lg:text-3xl text-[#313030] text-center mb-8">
            {homePageContent?.joinEmpowerdSectionTitleFirstPart}

            <br className="flex lg:hidden" />

            <span className="font-extrabold mx-2">
              {homePageContent?.joinEmpowerdSectionNumber}
            </span>
            {homePageContent?.joinEmpowerdSectionTitleSecPart}
          </h3>

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
                  <img src={el} alt="logo" height={90} width={90} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="border border-white" />

            <CarouselNext className="border border-white" />
          </Carousel>

          <div className="flex justify-center items-center">
            <a
              href="#contact-us"
              className="custom-mawared-btn-style h-9 lg:h-12 mt-8 mb-40 font-medium text-xs lg:text-xl hover:opacity-90 transition-opacity intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once"
              // onClick={() => handleNavigateToPage(`/contact`)}
            >
              {homePageContent?.joinEmpowerdSectionBtnLabel}
            </a>
          </div>
        </div>

        <div id="mawared-modules">
          <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
            <h2 className="text-2xl lg:text-5xl font-bold text-[#303030]">
              {homePageContent?.mawaredModulesMainTitle}
              <br className="flex lg:hidden" />
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.mawaredModulesSubTitle}
              </span>
            </h2>
          </div>

          <Carousel
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="flex-shrink-0 w-full"
          >
            <CarouselContent>
              {homeFeaturesModules?.map((el, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-center mb-12">
                      <h2 className="text-sm lg:text-4xl font-bold text-[#303030]">
                        {el?.titleFirstSection}
                      </h2>

                      <p className="text-[#5A5959] font-normal  text-xs lg:text-xl mt-8">
                        {el?.content}
                      </p>
                    </div>

                    <a
                      href="#contact-us"
                      className="custom-discover-btn-style h-9 lg:h-12 w-1/2 md:w-1/4 font-medium text-sm mb-12 hover:opacity-90 transition-opacity"
                      // onClick={() => handleNavigateToPage(`/contact`)}
                    >
                      {el?.btnLabel}
                    </a>

                    <img src={el?.imgUrl} alt="module-img" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="border border-white" />

            <CarouselNext className="border border-white" />
          </Carousel>
        </div>

        <div id="mobile-app">
          <div className="my-40 intersect:animate-fade-right animate-duration-700 animate-ease-linear">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold text-[#303030]">
                {homePageContent?.flexabilityFirstSectionTitle}
                <br className="flex lg:hidden" />
                <span className="text-customBlueWaveyColor mx-2">
                  {homePageContent?.flexabilitySecondSectionTitle}
                </span>
              </h2>

              <p className="text-[#5A5959] font-normal text-xs lg:text-xl mt-8">
                {homePageContent?.flexabilityDescription}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-3 lg:gap-6">
              <div className="hidden lg:flex flex-col justify-center items-center">
                {flexabilityContent?.slice(0, 4)?.map((el) => (
                  <div className="flex items-center justify-end gap-6 mb-6">
                    <div className="text-right">
                      <h2 className="font-semibold text-xl text-[#313030]">
                        <br className="flex lg:hidden" />
                        <span className="text-customBlueWaveyColor me-2">
                          {el?.firstTitle}
                        </span>
                        {el?.secondTitle}
                      </h2>

                      <p className="text-[#313030] font-medium text-sm mt-1">
                        {el?.description}
                      </p>
                    </div>

                    <img src={el?.iconUrl} alt="flexibility-icon" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src={homePageContent?.flexabilityImgUrl}
                  alt="flexibility-view"
                />
              </div>

              <div className="hidden lg:flex flex-col justify-center items-center">
                <div className="flex flex-col lg:justify-center lg:items-center">
                  {flexabilityContent?.slice(4, 8)?.map((el) => (
                    <div className="flex items-center gap-6 mb-6">
                      <img src={el?.iconUrl} alt="flexibility-icon" />

                      <div>
                        <h2 className="font-semibold text-xs lg:text-xl text-[#313030]">
                          <br className="flex lg:hidden" />
                          <span className="text-customBlueWaveyColor me-2">
                            {el?.firstTitle}
                          </span>
                          {el?.secondTitle}
                        </h2>

                        <p className="text-[#313030] font-medium text-sm mt-1">
                          {el?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex lg:hidden flex-col justify-center items-center">
                <div className="flex flex-col lg:justify-center lg:items-center">
                  {flexabilityContent?.map((el) => (
                    <div className="flex items-center gap-6 mb-6">
                      <img src={el?.iconUrl} alt="flexibility-icon" />

                      <div>
                        <h2 className="font-semibold text-xs lg:text-xl text-[#313030]">
                          <br className="flex lg:hidden" />
                          <span className="text-customBlueWaveyColor me-2">
                            {el?.firstTitle}
                          </span>
                          {el?.secondTitle}
                        </h2>

                        <p className="text-[#313030] font-medium text-sm mt-1">
                          {el?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <a
                href="#contact-us"
                className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-xs lg:text-xl mt-12 hover:opacity-90 transition-opacity"
                // onClick={() => handleNavigateToPage(`/contact`)}
              >
                Book a free demo
              </a>
            </div>
          </div>
        </div>

        <div id="features">
          <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#303030]">
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.featuresSectionTitleFirstPart}
              </span>

              <br className="flex lg:hidden" />
              {homePageContent?.featuresSectionTitleSecPart}
            </h2>

            <p className="text-[#303030] font-medium text-xs lg:text-2xl mt-8">
              {homePageContent?.featuresSectionDescription}
            </p>
          </div>

          <Carousel
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="flex-shrink-0 w-full"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {homeFeaturesfirstSlide?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-8"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-sm lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {homeFeaturesSecSlide?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-8"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-sm lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {homeFeaturesThirdSlide?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-8"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-sm lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {homeFeaturesFourthSlide?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-8"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-sm lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="border border-white" />

            <CarouselNext className="border border-white" />
          </Carousel>

          <div className="flex justify-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once mb-40">
            <a
              href="#contact-us"
              className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-xs lg:text-lg my-12 hover:opacity-90 transition-opacity"
              // onClick={() => handleNavigateToPage(`/contact`)}
            >
              {homePageContent?.featuresSectionBtnLabel}
            </a>
          </div>
        </div>

        <div id="services">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#303030]">
              {homePageContent?.servicesSectionTitleFirstPart}
              <br className="flex lg:hidden" />
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.servicesSectionTitleSecPart}
              </span>
            </h2>

            <p className="text-[#303030] font-medium text-xs lg:text-2xl mt-8">
              {homePageContent?.servicesSectionDescription}
            </p>
          </div>

          <div className="mb-12 intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
            <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
              <img
                src={homePageContent?.servicesSectionFirstRowImgUrl}
                alt="service-img"
              />

              <div className="flex flex-col gap-6">
                {homeServices?.slice(0, 4)?.map((el, index) => (
                  <div key={index} className="flex items-center">
                    <img src={el?.iconUrl} alt="service-icon" />

                    <div className="mx-4">
                      <h2 className="font-medium text-sm lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>
                      <p className="font-normal text-xs lg:text-sm text-[#313030]">
                        {el?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
              <img
                src={homePageContent?.servicesSectionSecRowImgUrl}
                alt="service-img"
                className="mt-16 flex xl:hidden"
              />

              <div className="flex flex-col gap-6">
                {homeServices?.slice(4, 8)?.map((el, index) => (
                  <div key={index} className="flex items-center">
                    <img src={el?.iconUrl} alt="service-icon" />

                    <div className="mx-4">
                      <h2 className="font-medium text-sm lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>
                      <p className="font-normal text-xs lg:text-sm text-[#313030]">
                        {el?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <img
                src={homePageContent?.servicesSectionSecRowImgUrl}
                alt="service-img"
                className="hidden xl:flex"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="partners"
        style={{
          backgroundImage: `url(./img/partner-section-bg.png)`,
        }}
        className="bg-no-repeat bg-cover p-20 md:p-60 xl:p-80"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#303030] mb-6">
            {homePageContent?.trustedSectionTitleFirstPart}
            <br className="flex lg:hidden" />
            <span className="text-customBlueWaveyColor mx-2">
              {homePageContent?.trustedSectionTitleSecPart}
            </span>
            {homePageContent?.trustedSectionTitleThirdPart}
          </h2>

          <p className="font-medium text-[#5A5959] text-sm lg:text-lg">
            {homePageContent?.trustedSectionDescription}
          </p>
        </div>

        <div className="flex items-center justify-center mb-16">
          <img src={homePageContent?.trustedSectionImgUrl} alt="stats-img" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {homePageContent?.companyLogsUrls?.map((el, index) => (
            <div className="flex justify-center items-center">
              <img key={index} src={el} alt="logo" height={75} width={110} />
            </div>
          ))}
        </div>
      </div>

      <div id="contact-us" className="mb-40 md:mb-10">
        <div className="lg:flex flex-col justify-center items-center p-11 lg:p-24 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-5xl font-bold text-[#303030]">
              {homePageContent?.contactUsSectionTitleFirstPart}
              <br className="flex lg:hidden" />
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.contactUsSectionTitleSecPart}
              </span>
            </h2>

            <p className="text-[#5A5959] font-normal text-lg lg:text-3xl mt-8">
              {homePageContent?.contactUsSectionDescription}
            </p>
          </div>

          {/* Start of contact us form component */}
          <ContactForm />
          {/* End of contact us form component */}

          {/* <div className="text-center mb-16 intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#303030]">
            What
             <br className="flex lg:hidden" />
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
                    <CardTitle className="font-normal text-xs lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-xs lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-xs lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-xs lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-xs lg:text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-xs lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-xs lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-xs lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-xs lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-xs lg:text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-xs lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-xs lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-xs lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-xs lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-xs text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="border border-white" />

            <CarouselNext className="border border-white" />
          </Carousel>
        </div>

        <hr className="my-16 w-full" /> */}

          {/* <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#303030]">
            {homePageContent?.globeSectionTitleFirstPart}
             <br className="flex lg:hidden" />
            <span className="text-customBlueWaveyColor mx-2">
              {homePageContent?.globeSectionTitleSecPart}
            </span>
          </h2>
        </div>

        <div className="flex justify-center items-center my-12 intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
          <img src={homePageContent?.globeSectionImgUrl} alt="globe" />
        </div>

        <hr className="my-16 w-full" /> */}

          {/* Start of Revolutionize component  */}
          {/* <Revolutionize /> */}
          {/* End of Revolutionize component  */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
