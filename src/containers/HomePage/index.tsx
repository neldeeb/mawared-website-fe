import { useState, useEffect, useRef } from "react";
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
import AutoScroll from "embla-carousel-auto-scroll";
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
import PartnerSection from "@/components/PartnerSection";
import WaveBackground from "@/components/WavBackground";

const HomePage = () => {
  // const navigate = useNavigate();

  // handle navigate to page function
  // const handleNavigateToPage = (route: string) => {
  //   navigate(route);
  // };

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in view
        } else {
          setIsVisible(false); // Optional: Reset when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center px-5 md:px-24 mt-6 md:mt-20">
        <div id="home-intro">
          <div className="text-center mb-6 xl:mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
            <h2 className="text-xl lg:text-5xl font-semibold text-[#303030]">
              <span className="text-customBlueWaveyColor mx-2 font-bold">
                {homePageContent?.introMainTitle}
              </span>

              {/* <br className="flex lg:hidden" /> */}

              {homePageContent?.introSubTitle}
            </h2>

            <p className="text-[#303030] font-medium text-sm lg:text-2xl mt-8">
              {homePageContent?.introDescription}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <a
              href="#contact-us"
              className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-sm lg:text-xl mb-6 xl:mb-12 hover:opacity-90 transition-opacity intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once"
              // onClick={() => handleNavigateToPage(`/contact`)}
            >
              {homePageContent?.introBtnLabel}
            </a>
          </div>

          <img
            src={homePageContent?.introImgUrl}
            alt="laptop-view"
            className="intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once mb-20 xl:max-w-6xl"
          />
        </div>

        <div id="join-empowred" className="mb-12 xl:mb-28">
          <h3 className="font-semibold text-xl lg:text-3xl text-[#313030] text-center mb-4">
            {homePageContent?.joinEmpowerdSectionTitleFirstPart}

            {/* <br className="flex lg:hidden" /> */}

            <span className="font-extrabold mx-2">
              {homePageContent?.joinEmpowerdSectionNumber}
            </span>

            {homePageContent?.joinEmpowerdSectionTitleSecPart}

            <span className="hidden lg:inline-block mx-2">
              {homePageContent?.joinEmpowerdSectionTitleThirdPart}
            </span>
          </h3>

          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                speed: 2,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {homePageContent?.companyLogsUrls
                ?.slice(0, 7)
                ?.map((el, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 pl-2 flex justify-center items-center gap-10"
                  >
                    <img src={el} alt="logo" height={160} width={160} />
                  </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="border border-white" />

            <CarouselNext className="border border-white" />
          </Carousel>

          <div className="flex justify-center items-center">
            <a
              href="#contact-us"
              className="custom-mawared-btn-style h-9 lg:h-12 mt-4 font-medium text-sm lg:text-xl hover:opacity-90 transition-opacity intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once"
              // onClick={() => handleNavigateToPage(`/contact`)}
            >
              {homePageContent?.joinEmpowerdSectionBtnLabel}
            </a>
          </div>
        </div>

        <div
          ref={containerRef}
          id="mawared-modules"
          className="mb-12 xl:mb-28 w-10/12 md:w-full"
        >
          <div className="text-center mb-6 xl:mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
            <h2 className="text-xl lg:text-5xl font-bold text-[#303030]">
              {homePageContent?.mawaredModulesMainTitle}
              {/* <br className="flex lg:hidden" /> */}
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.mawaredModulesSubTitle}
              </span>
            </h2>
          </div>

          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 6000,
                playOnInit: isVisible,
              }),
            ]}
            className="flex-shrink-0 w-full"
          >
            <CarouselContent>
              {homeFeaturesModules?.map((el, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-center mb-6 xl:mb-12">
                      <h2 className="text-base lg:text-4xl font-bold text-[#303030]">
                        {el?.titleFirstSection}
                      </h2>

                      <p className="text-[#5A5959] font-normal text-sm lg:text-xl mt-4">
                        {el?.content}
                      </p>
                    </div>

                    {/* <a
                      href="#contact-us"
                      className="custom-discover-btn-style h-9 lg:h-12 w-1/2 md:w-1/4 font-medium text-sm mb-6 xl:mb-12 hover:opacity-90 transition-opacity"
                      // onClick={() => handleNavigateToPage(`/contact`)}
                    >
                      {el?.btnLabel}
                    </a> */}

                    <img
                      src={el?.imgUrl}
                      alt="module-img"
                      height={1500}
                      width={1500}
                      className="hidden md:block"
                    />

                    <img
                      src={el?.mobileImgUrl}
                      alt="module-img"
                      className="block md:hidden"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="border translate-y-[-770%] translate-x-5 lg:translate-y-0 border-white" />

            <CarouselNext className="border translate-y-[-770%] -translate-x-5 lg:translate-y-0  border-white" />
          </Carousel>
        </div>

        <div id="mobile-app" className="mb-12 xl:mb-28">
          <div className="intersect:animate-fade-right animate-duration-700 animate-ease-linear">
            <div className="text-center mb-6 xl:mb-12">
              <h2 className="text-xl lg:text-4xl font-bold text-[#303030]">
                {homePageContent?.flexabilityFirstSectionTitle}
                {/* <br className="flex lg:hidden" /> */}
                <span className="text-customBlueWaveyColor mx-2">
                  {homePageContent?.flexabilitySecondSectionTitle}
                </span>
              </h2>

              <p className="text-[#5A5959] font-normal text-sm lg:text-xl mt-2 lg:mt-6">
                {homePageContent?.flexabilityDescription}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-3 lg:gap-6">
              <div className="hidden lg:flex flex-col justify-center items-center">
                {flexabilityContent?.slice(0, 4)?.map((el, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-end gap-6 ${el?.gapSpace} mb-6`}
                  >
                    <div className="text-right">
                      <h2 className="font-semibold text-xl text-[#313030]">
                        {/* <br className="flex lg:hidden" /> */}
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
                  // height={1500}
                  // width={1500}
                  className="md:max-w-auto 2xl:max-w-3xl"
                />
              </div>

              <div className="hidden lg:flex flex-col justify-center">
                <div className="flex flex-col lg:justify-center lg:items-center">
                  {flexabilityContent?.slice(4, 8)?.map((el, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-6 ${el?.gapSpace} mb-6`}
                    >
                      <img src={el?.iconUrl} alt="flexibility-icon" />

                      <div>
                        <h2 className="font-bold text-base lg:text-xl text-[#313030]">
                          {/* <br className="flex lg:hidden" /> */}
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
                  {flexabilityContent?.map((el, index) => (
                    <div key={index} className="flex items-center gap-6 mb-5">
                      <img src={el?.iconUrl} alt="flexibility-icon" />

                      <div>
                        <h2 className="font-bold text-base lg:text-xl text-[#313030]">
                          {/* <br className="flex lg:hidden" /> */}
                          <span className="text-customBlueWaveyColor me-2">
                            {el?.firstTitle}
                          </span>
                          {el?.secondTitle}
                        </h2>

                        <p className="text-[#313030] font-medium text-xs mt-1">
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
                className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-sm lg:text-xl mt-4 hover:opacity-90 transition-opacity"
                // onClick={() => handleNavigateToPage(`/contact`)}
              >
                Book a free demo
              </a>
            </div>
          </div>
        </div>

        <div id="features" className="mb-12 xl:mb-28 w-10/12 md:w-full">
          <div className="text-center mb-6 xl:mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
            <h2 className="text-xl lg:text-4xl font-bold text-[#303030]">
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.featuresSectionTitleFirstPart}
              </span>

              {/* <br className="flex lg:hidden" /> */}
              {homePageContent?.featuresSectionTitleSecPart}
            </h2>

            <p className="text-[#303030] font-medium text-sm lg:text-2xl mt-2 lg:mt-6">
              {homePageContent?.featuresSectionDescription}
            </p>
          </div>

          <Carousel
            opts={{ loop: true }}
            // plugins={[
            //   Autoplay({
            //     delay: 6000,
            //   }),
            // ]}
            className="lg:hidden flex-shrink-0 w-full"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesfirstSlide?.slice(0, 4)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesfirstSlide?.slice(4, 8)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesSecSlide?.slice(0, 4)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesSecSlide?.slice(4, 8)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesThirdSlide?.slice(0, 4)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesThirdSlide?.slice(4, 8)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesFourthSlide?.slice(0, 4)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {homeFeaturesFourthSlide?.slice(4, 8)?.map((el, index) => (
                    <div key={index} className="custom-home-feature-card-style">
                      <img
                        className="pb-4 w-7"
                        src={el?.iconUrl}
                        alt="feature-icon"
                      />

                      <h2 className="font-semibold text-xs lg:text-lg text-[#313030]">
                        {el?.title}
                      </h2>

                      <p className="font-medium text-xs lg:text-sm text-[#313030] py-2">
                        {el?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
                  <a
                    href="#contact-us"
                    className="custom-mawared-btn-style h-9 font-medium text-xs mt-8 hover:opacity-90 transition-opacity"
                    // onClick={() => handleNavigateToPage(`/contact`)}
                  >
                    {homePageContent?.featuresSectionBtnLabel}
                  </a>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="border translate-x-3 border-white" />

            <CarouselNext className="border -translate-x-3 border-white" />
          </Carousel>

          <Carousel
            opts={{ loop: true }}
            // plugins={[
            //   Autoplay({
            //     delay: 6000,
            //   }),
            // ]}
            className="hidden lg:flex flex-shrink-0 w-full"
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

                      <p className="font-medium text-sm lg:text-sm text-[#313030] py-2">
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

                      <p className="font-medium text-sm lg:text-sm text-[#313030] py-2">
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

                      <p className="font-medium text-sm lg:text-sm text-[#313030] py-2">
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

                      <p className="font-medium text-sm lg:text-sm text-[#313030] py-2">
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

          <div className="hidden lg:flex justify-center text-center items-center intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
            <a
              href="#contact-us"
              className="custom-mawared-btn-style h-9 lg:h-12 font-medium text-xs lg:text-lg lg:mt-12 hover:opacity-90 transition-opacity"
              // onClick={() => handleNavigateToPage(`/contact`)}
            >
              {homePageContent?.featuresSectionBtnLabel}
            </a>
          </div>
        </div>

        <div id="services" className="mb-12 xl:mb-28">
          <div className="text-center mb-16">
            <h2 className="text-xl lg:text-4xl font-bold text-[#303030]">
              {homePageContent?.servicesSectionTitleFirstPart}
              {/* <br className="flex lg:hidden" /> */}
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.servicesSectionTitleSecPart}
              </span>
            </h2>

            <p className="text-[#303030] font-medium text-sm lg:text-2xl mt-2 lg:mt-6">
              {homePageContent?.servicesSectionDescription}
            </p>
          </div>

          <div className="intersect:animate-fade animate-once animate-duration-1000 animate-ease-linear intersect-once">
            <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
              <img
                src={homePageContent?.servicesSectionFirstRowImgUrl}
                alt="service-img"
                height={850}
                width={850}
              />

              <div className="grid grid-cols-2 xl:flex xl:flex-col gap-3 lg:gap-6">
                {homeServices?.slice(0, 4)?.map((el, index) => (
                  <div key={index} className="flex items-start">
                    <img
                      src={el?.iconUrl}
                      alt="service-icon"
                      className="w-7 lg:w-9"
                    />

                    <div className="mx-4">
                      <h2 className="font-semibold text-xs xl:text-lg text-[#313030]">
                        {el?.title}
                      </h2>
                      <p className="font-normal text-xs xl:text-sm text-[#313030] mt-1">
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

              <div className="grid grid-cols-2 xl:flex xl:flex-col gap-3 lg:gap-6">
                {homeServices?.slice(4, 8)?.map((el, index) => (
                  <div key={index} className="flex items-start">
                    <img
                      src={el?.iconUrl}
                      alt="service-icon"
                      className="w-7 lg:w-9"
                    />

                    <div className="mx-4">
                      <h2 className="font-bold text-xs xl:text-lg text-[#313030]">
                        {el?.title}
                      </h2>
                      <p className="font-normal text-xs xl:text-lg text-[#313030] mt-1">
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
                height={850}
                width={850}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="partners" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <WaveBackground className="w-full h-full" />
        </div>
        <div className="relative z-10">
          <PartnerSection />
        </div>
      </div>

      <div id="contact-us" className="mb-12 xl:mb-28">
        <div className="lg:flex flex-col justify-center items-center px-7 w-full">
          <div className="text-center mb-6 xl:mb-12">
            <h2 className="text-xl lg:text-5xl font-bold text-[#303030]">
              {homePageContent?.contactUsSectionTitleFirstPart}
              {/* <br className="flex lg:hidden" /> */}
              <span className="text-customBlueWaveyColor mx-2">
                {homePageContent?.contactUsSectionTitleSecPart}
              </span>
            </h2>

            <p className="text-[#5A5959] font-normal text-sm lg:text-3xl mt-2">
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
                    <CardTitle className="font-normal text-sm lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-sm lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-sm lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-sm lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-sm lg:text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-sm lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-sm lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-sm lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-sm lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-sm lg:text-base text-black">
                        Team lead
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem className="lg:basis-1/3 px-8">
                <Card className="custom-client-card-style">
                  <CardHeader>
                    <CardTitle className="font-normal text-sm lg:text-xl text-black">
                      Product teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="my-6">
                    <p className="font-normal text-sm lg:text-xl text-black">
                      The web and mobile apps are intuitive and seamless.
                      Managing HR tasks is effortless, whether I’m at my desk or
                      on the go
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="./img/client.png" />
                      <AvatarFallback className="bg-[#D9D9D9] font-normal text-sm lg:text-xl text-black border border-[#313030]">
                        CN
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 mx-3">
                      <h4 className="font-semibold text-sm lg:text-xl text-black">
                        Client name
                      </h4>
                      <p className="font-normal text-sm text-black">
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
