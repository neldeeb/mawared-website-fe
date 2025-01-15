import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { Observer } from "tailwindcss-intersect";

// define layout children props type
type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  // useStates
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const currentRoute = useLocation();

  // start the observer intersect for animation
  Observer.start();

  // handle navigate to page function
  const handleNavigateToPage = () => {
    navigate(`/contact`);
  };

  // when i navigate to any page by default opens at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // start of handle to top sticky page content btn function
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  // End of handle to top sticky page content btn function

  return (
    <div className="flex flex-col min-h-screen">
      {/* Start of navbar component */}
      <Navbar />
      {/* End of navbar component */}

      {/* Start of children of layout */}

      <main className="flex-grow pt-24">{children}</main>
      {/* End of children of layout */}

      {/* Start of footer component */}
      <Footer />
      {/* End of footer component */}

      {/* start of sticky chat btn */}
      {currentRoute?.pathname === "/contact" ? null : (
        <button
          onClick={handleNavigateToPage}
          className="custom-sticky-chat-btn-style animate-bounce"
          title="Chat with us"
        >
          <img src="./img/chat-icon.png" alt="chat-icon" />
        </button>
      )}
      {/* End of sticky chat btn */}

      {/* start of sticky scroll to top btn */}
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="custom-sticky-scroll-to-page-btn-style"
        title="Go to top"
      >
        <img src="./img/click-icon.png" alt="click-icon" />
      </button>
      {/* End of sticky scroll to top btn */}
    </div>
  );
};

export default Layout;
