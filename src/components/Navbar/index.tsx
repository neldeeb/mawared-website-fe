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
      <img src="/img/mawared-logo.png" alt="logo" />

      <div className="items-center justify-between gap-10 hidden lg:flex">
        <Link to="/">
          <div
            className={
              currentRoute?.pathname === "/"
                ? "font-semibold text-xl text-customBlueWaveyColor"
                : "font-medium text-xl text-[#313030]"
            }
          >
            Home
          </div>
        </Link>
        <Link to="/features">
          <div
            className={
              currentRoute?.pathname === "/features"
                ? "font-semibold text-xl text-customBlueWaveyColor"
                : "font-medium text-xl text-[#313030]"
            }
          >
            Features
          </div>
        </Link>
        <Link to="/faq">
          <div
            className={
              currentRoute?.pathname === "/faq"
                ? "font-semibold text-xl text-customBlueWaveyColor"
                : "font-medium text-xl text-[#313030]"
            }
          >
            FAQ
          </div>
        </Link>
        <Link to="/plans">
          <div
            className={
              currentRoute?.pathname === "/plans"
                ? "font-semibold text-xl text-customBlueWaveyColor"
                : "font-medium text-xl text-[#313030]"
            }
          >
            Plans
          </div>
        </Link>
        <Link to="/about">
          <div
            className={
              currentRoute?.pathname === "/about"
                ? "font-semibold text-xl text-customBlueWaveyColor"
                : "font-medium text-xl text-[#313030]"
            }
          >
            About
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex">
        <Button
          className="flex custom-nav-btn-style font-medium text-lg"
          onClick={handleNavigateToPage}
        >
          Book a live demo
        </Button>
      </div>

      {/* start of mobile navbar */}
      <div className="flex lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu color="#1997e1" size={38} />
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
                <Link to="/features">
                  <div
                    className={
                      currentRoute?.pathname === "/features"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    Features
                  </div>
                </Link>
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
                <Link to="/plans">
                  <div
                    className={
                      currentRoute?.pathname === "/plans"
                        ? "font-semibold text-xl text-customBlueWaveyColor mb-3"
                        : "font-medium text-xl text-[#313030] mb-3"
                    }
                  >
                    Plans
                  </div>
                </Link>
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
              <Button
                className="custom-nav-btn-style font-medium text-lg w-1/2"
                onClick={handleNavigateToPage}
              >
                Book a live demo
              </Button>

              <DrawerClose className="w-1/2">
                <Button className="bg-[#313030] text-white font-medium text-lg border rounded-xl w-full py-5">
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
