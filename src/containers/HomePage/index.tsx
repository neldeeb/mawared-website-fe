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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // handle navigate to page function
  const handleNavigateToPage = (route: string) => {
    navigate(route);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-24">
        <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#303030]">
            Human Resources.
            <span className="text-customBlueWaveyColor mx-2">Reimagined.</span>
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            The Ultimate Cloud-Based HRMS Platform For Your HR Operations.
          </p>
        </div>

        <Button
          className="custom-mawared-btn-style font-bold text-xl mb-12 hover:opacity-90 transition-opacity intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once"
          onClick={() => handleNavigateToPage(`/features`)}
        >
          See Mawared HR in Action
        </Button>

        <img
          src="/img/laptop-view.png"
          alt="laptop-view"
          className="intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once"
        />

        <hr className="my-16 w-full" />

        <h3 className="font-medium text-3xl text-[#313030] text-center intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once">
          Trusted by over <span className="font-extrabold mx-2">400+</span>
          Businesses. Empowering Workforces Every Day.
        </h3>

        <Button
          className="custom-mawared-btn-style font-bold text-xl my-12 hover:opacity-90 transition-opacity intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once"
          onClick={() => handleNavigateToPage(`/contact`)}
        >
          Join the Empowered
        </Button>

        <Carousel
          className="intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/talabat-logo.png" alt="talabat-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/iq-logo.png" alt="iq-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/tabibi-logo.png" alt="tabibi-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/caizo-logo.png" alt="caizo-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/derma-logo.png" alt="derma-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/handler-logo.png" alt="handler-logo" />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="border border-[#313030]" />

          <CarouselNext className="border border-[#313030]" />
        </Carousel>

        <hr className="my-16 w-full" />

        <div className="text-center mb-12 intersect:animate-fade-down animate-duration-700 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            Features That Make HR
            <span className="text-customBlueWaveyColor mx-2">
              Easier and Faster
            </span>
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            Combining Next-Gen tools with intuitive design to improve workforce
            management and simplify HR processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center intersect:animate-fade-left animate-duration-700 animate-ease-linear intersect-once">
            <img src="/img/iphone-view.png" alt="iphone-view" />
          </div>

          <div className="grid grid-cols-2 intersect:animate-fade-right animate-duration-700 animate-ease-linear intersect-once">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-2 justify-center items-center mb-12">
                <img src="/img/smart-att-icon.png" alt="smart-att-icon" />
                <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                  Smart Attendance Tracking
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center mb-12">
                <img
                  src="/img/efficient-emp-icon.png"
                  alt="efficient-emp-icon"
                />
                <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                  Efficient Employee Requests
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center mb-12">
                <img src="/img/flex-icon.png" alt="flex-icon" />
                <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                  Customizable and Flexible Work Scheduling
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-2 justify-center items-center mb-12">
                <img src="/img/payroll-icon.png" alt="payroll-icon" />
                <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                  Automated Payroll Processing
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center mb-12">
                <img src="/img/realtime-icon.png" alt="realtime-icon" />
                <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                  Real-Time Insights
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center mb-12">
                <img src="/img/real-time-icon.png" alt="real-time-icon" />
                <p className="text-[#313030] font-semibold text-base lg:text-xl text-center">
                  Document Management Made Simple
                </p>
              </div>
            </div>
          </div>

          <div className="col-start-2 lg:flex justify-center items-center hidden intersect:animate-fade-up animate-duration-700 animate-ease-linear intersect-once">
            <Button
              className="custom-mawared-btn-style font-bold text-base lg:text-xl mb-12 w-1/2 hover:opacity-90 transition-opacity"
              onClick={() => handleNavigateToPage(`/features`)}
            >
              Explore All Features
            </Button>
          </div>
        </div>

        <hr className="my-16 w-full" />

        <div className="text-center mb-16 intersect:animate-jump animate-duration-700 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            What You Get When You
            <span className="text-customBlueWaveyColor mx-2">
              Join Mawared HR
            </span>
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            Experience the measurable impact of using Mawared HR Digital
            Solutions
          </p>
        </div>

        <div className="mb-12 intersect:animate-jump animate-duration-700 animate-ease-linear intersect-once">
          <img src="/img/reasons-img.png" alt="reasons-img" />
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
                  src="/img/google-play-icon.png"
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
                  src="/img/apple-store-icon.png"
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
                  src="/img/app-gallery-icon.png"
                  alt="Explore it on AppGallery"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <div className="absolute right-0 -bottom-[115px] intersect:animate-fade-right animate-duration-700 animate-ease-in-out intersect-once">
            <img src="/img/app-mobile-img.png" alt="app-mobile-img" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-24">
        <div className="text-center mb-12 intersect:animate-jump animate-duration-1000 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            Powerful
            <span className="text-customBlueWaveyColor mx-2">Features</span>
            that elevate HR Management
          </h2>
        </div>

        <div className="mb-12 intersect:animate-jump animate-duration-1000 animate-ease-linear">
          <img src="/img/features-icons.png" alt="features-icons" />
        </div>

        <div className="grid lg:grid-cols-2 mt-20 intersect:animate-jump animate-duration-1000 animate-ease-linear intersect-once">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-[#303030] mb-8">
              Employee Management
            </h3>
            <p className="text-xl font-normal text-[#303030]">
              Effortlessly manage your entire workforce from one centralized
              system. Track employee profiles, roles, performance, and
              attendance with ease. Automate routine tasks, streamline
              communication, and ensure accurate, up-to-date records—all
              designed to boost productivity and reduce administrative workload.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img src="/img/employee-managment.png" alt="employee-managment" />
          </div>
        </div>

        <hr className="my-16 w-full" />

        <div className="flex justify-center items-center my-12 intersect:animate-fade-right animate-duration-700 animate-ease-linear">
          <img src="/img/flexibility-view.png" alt="flexibility-view" />
        </div>

        <hr className="my-16 w-full" />

        {/* <div className="text-center mb-16 intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once">
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
                      <AvatarImage src="/img/client.png" />
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
                      <AvatarImage src="/img/client.png" />
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
                      <AvatarImage src="/img/client.png" />
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

        <div className="text-center mb-16 intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            Empowering Businesses Across
            <span className="text-customBlueWaveyColor mx-2">The Globe</span>
          </h2>
        </div>

        <div className="flex justify-center items-center my-12 intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once">
          <img src="/img/globe.png" alt="globe" />
        </div>

        <hr className="my-16 w-full" />

        <div className="text-center mb-16 intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#303030]">
            Trusted by
            <span className="text-customBlueWaveyColor mx-2">
              Industry Leaders
            </span>
            Worldwide
          </h2>
        </div>

        <Carousel
          className="intersect:animate-jump-in animate-duration-1000 animate-ease-linear intersect-once"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/talabat-logo.png" alt="talabat-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/iq-logo.png" alt="iq-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/tabibi-logo.png" alt="tabibi-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/caizo-logo.png" alt="caizo-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/derma-logo.png" alt="derma-logo" />
            </CarouselItem>

            <CarouselItem className="basis-1/6 pl-2">
              <img src="/img/handler-logo.png" alt="handler-logo" />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="border border-[#313030]" />

          <CarouselNext className="border border-[#313030]" />
        </Carousel>

        <hr className="my-16 w-full" />

        {/* Start of Revolutionize component  */}
        <Revolutionize />
        {/* End of Revolutionize component  */}
      </div>
    </Layout>
  );
};

export default HomePage;
