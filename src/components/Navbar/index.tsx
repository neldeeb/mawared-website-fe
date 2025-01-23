import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const currentRoute = useLocation();
  // const navigate = useNavigate();

  // handle navigate to page function
  // const handleNavigateToPage = () => {
  //   navigate(`/contact`);
  // };

  return (
    <div className="bg-[#FFFFFFA6] flex items-center justify-between custom-nav-shadow-box-style gap-10 px-5 xl:px-24 h-16 xl:h-20 fixed w-full z-50">
      <img
        src="./img/mawared-logo.png"
        alt="logo"
        className="h-7 xl:h-auto hidden lg:flex"
      />
      <div className="items-center justify-center gap-14 hidden lg:flex">
        {/* <Link to="/">
          <div
            className={
              currentRoute?.pathname === "/"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            Home
          </div>
        </Link> */}
        <a href="#home-intro">
          <div className="font-medium text-sm xl:text-lg text-[#313030] hover:scale-110">
            Home
          </div>
        </a>
        <a href="#mawared-modules">
          <div className="font-medium text-sm xl:text-lg text-[#313030] hover:scale-110">
            Modules
          </div>
        </a>

        <a href="#features">
          <div className="font-medium text-sm xl:text-lg text-[#313030] hover:scale-110">
            Features
          </div>
        </a>

        <a href="#services">
          <div className="font-medium text-sm xl:text-lg text-[#313030] hover:scale-110">
            Mobile app
          </div>
        </a>
        {/* <Link to="/features">
          <div
            className={
              currentRoute?.pathname === "/features"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            Features
          </div>
        </Link> */}
        {/* <Link to="/faq">
          <div
            className={
              currentRoute?.pathname === "/faq"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            FAQ
          </div>
        </Link> */}
        {/* <Link to="/plans">
          <div
            className={
              currentRoute?.pathname === "/plans"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            Plans
          </div>
        </Link> */}
        {/* <Link to="/about">
          <div
            className={
              currentRoute?.pathname === "/about"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            About
          </div>
        </Link> */}
      </div>

      <div className="hidden lg:flex items-center justify-center gap-10">
        <a
          href="https://app.mawared-hr.com/login"
          target="_blank"
          className="cursor-pointer text-[#23AAEB] font-medium text-sm xl:text-lg flex items-center"
        >
          Login
          <img src="./img/login-icon.png" alt="login-icon" className="px-1" />
        </a>

        <a
          href="#contact-us"
          className="flex custom-nav-btn-style h-[43px] px-6 py-3 font-medium text-lg hover:opacity-90 transition-opacity"
          // onClick={handleNavigateToPage}
        >
          Book a live demo
        </a>
      </div>

      {/* start of mobile navbar */}
      <Drawer>
        <div className="flex justify-between items-center lg:hidden w-full">
          <div className="flex gap-3 items-center">
            <DrawerTrigger>
              <Menu color="#191919" size={24} />
            </DrawerTrigger>

            <img
              src="./img/mawared-logo.png"
              alt="logo"
              className="h-6 xl:h-auto"
            />
          </div>

          <a
            href="#contact-us"
            className="custom-nav-btn-style h-7 px-4 font-medium text-xs xl:text-xl"
            // onClick={handleNavigateToPage}
          >
            Book A demo
          </a>

          <DrawerContent>
            <DrawerHeader className="flex justify-center items-center pt-11 sm:text-center">
              <DrawerDescription>
                <a href="#home-intro">
                  <div className="font-medium text-xl text-[#313030] mb-3">
                    Home
                  </div>
                </a>
                <a href="#mawared-modules">
                  <div className="font-medium text-xl text-[#313030] mb-3">
                    Modules
                  </div>
                </a>

                <a href="#features">
                  <div className="font-medium text-xl text-[#313030] mb-3">
                    Features
                  </div>
                </a>

                <a href="#services">
                  <div className="font-medium text-xl text-[#313030] mb-3">
                    Mobile app
                  </div>
                </a>

                {/* <Link to="/">
                  <div
                    className={
                      currentRoute?.pathname === "/"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    Home
                  </div>
                </Link> */}
                {/* <Link to="/features">
                  <div
                    className={
                      currentRoute?.pathname === "/features"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    Features
                  </div>
                </Link> */}
                {/* <Link to="/faq">
                  <div
                    className={
                      currentRoute?.pathname === "/faq"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    FAQ
                  </div>
                </Link> */}
                {/* <Link to="/plans">
                  <div
                    className={
                      currentRoute?.pathname === "/plans"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    Plans
                  </div>
                </Link> */}
                {/* <Link to="/about">
                  <div
                    className={
                      currentRoute?.pathname === "/about"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    About
                  </div>
                </Link> */}
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter className="flex justify-center items-center gap-6">
              <a
                href="https://app.mawared-hr.com/login"
                target="_blank"
                className="cursor-pointer text-[#23AAEB] font-medium text-lg flex items-center"
              >
                Login
                <img
                  src="./img/login-icon.png"
                  alt="login-icon"
                  className="px-1"
                />
              </a>

              <DrawerClose className="w-3/4">
                <Button className="bg-[#313030] text-white font-medium text-sm xl:text-xl border rounded-xl w-full py-5">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </div>
      </Drawer>
      {/* end of mobile navbar */}
    </div>
  );
};

export default Navbar;
