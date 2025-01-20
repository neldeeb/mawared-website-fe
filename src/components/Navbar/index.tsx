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
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentRoute = useLocation();
  const navigate = useNavigate();

  // handle navigate to page function
  const handleNavigateToPage = () => {
    navigate(`/contact`);
  };

  return (
    <div className="bg-[#FFFFFFA6] flex items-center justify-between custom-nav-shadow-box-style gap-10 px-24 h-20 fixed w-full z-50">
      <img src="./img/mawared-logo.png" alt="logo" className="h-7 xl:h-auto" />

      <div className="items-center justify-between gap-10 hidden lg:flex">
        <Link to="/">
          <div
            className={
              currentRoute?.pathname === "/"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            Home
          </div>
        </Link>
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
        <Link to="/faq">
          <div
            className={
              currentRoute?.pathname === "/faq"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            FAQ
          </div>
        </Link>
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
        <Link to="/about">
          <div
            className={
              currentRoute?.pathname === "/about"
                ? "font-semibold text-sm xl:text-xl text-customBlueWaveyColor hover:scale-110"
                : "font-medium text-sm xl:text-xl text-[#313030] hover:scale-110"
            }
          >
            About
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-10">
        <a
          href="https://app.mawared-hr.com/login"
          target="_blank"
          className="cursor-pointer text-[#23AAEB] font-medium text-sm xl:text-xl flex items-center"
        >
          Login
          <img src="./img/login-icon.png" alt="login-icon" className="px-1" />
        </a>

        <Button
          className="flex custom-nav-btn-style h-9 xl:h-12 font-medium text-xs xl:text-xl hover:opacity-90 transition-opacity"
          onClick={handleNavigateToPage}
        >
          Book a live demo
        </Button>
      </div>

      {/* start of mobile navbar */}
      <div className="flex lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu color="#191919" size={28} />
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="flex justify-center items-center pt-11 sm:text-center">
              <DrawerDescription>
                <Link to="/">
                  <div
                    className={
                      currentRoute?.pathname === "/"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    Home
                  </div>
                </Link>
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
                <Link to="/faq">
                  <div
                    className={
                      currentRoute?.pathname === "/faq"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    FAQ
                  </div>
                </Link>
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
                <Link to="/about">
                  <div
                    className={
                      currentRoute?.pathname === "/about"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    About
                  </div>
                </Link>
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

              <Button
                className="custom-nav-btn-style font-medium text-sm xl:text-xl w-1/2"
                onClick={handleNavigateToPage}
              >
                Book a live demo
              </Button>

              <DrawerClose className="w-1/2">
                <Button className="bg-[#313030] text-white font-medium text-sm xl:text-xl border rounded-xl w-full py-5">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      {/* end of mobile navbar */}
    </div>
  );
};

export default Navbar;
