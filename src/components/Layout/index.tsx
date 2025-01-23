import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Observer } from "tailwindcss-intersect";

// define layout children props type
type Props = {
  children?: React.ReactNode;
};

// define whatsapp interface props
interface WhatsAppProps {
  phoneNumber: string;
  message: string;
}

const Layout = ({ children }: Props) => {
  // useStates
  // const [visible, setVisible] = useState(false);

  // start the observer intersect for animation
  Observer.start();

  // when i navigate to any page by default opens at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // start of handle to top sticky page content btn function
  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // window.addEventListener("scroll", toggleVisible);
  // End of handle to top sticky page content btn function

  // Start of handle whats app link function component
  const WhatsAppLink = ({ phoneNumber, message }: WhatsAppProps) => {
    // Encode the message to include in the URL
    const encodedMessage = encodeURIComponent(message || "");
    const whatsappURL = `https://wa.me/${phoneNumber}${
      message ? `?text=${encodedMessage}` : ""
    }`;

    return (
      <a
        className="custom-sticky-chat-btn-style"
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us"
      >
        <img
          src="./img/whatsapp-icon.svg"
          alt="chat-icon"
          className="h-12 w-12 lg:h-auto lg:w-auto"
        />
      </a>
    );
  };
  // End of handle whats app link function component

  return (
    <div className="flex flex-col min-h-screen">
      {/* Start of navbar component */}
      <Navbar />
      {/* End of navbar component */}

      {/* Start of children of layout */}

      <main className="flex-grow pt-16 lg:pt-24">{children}</main>
      {/* End of children of layout */}

      {/* Start of footer component */}
      <Footer />
      {/* End of footer component */}

      {/* start of sticky whats app btn */}
      <WhatsAppLink
        phoneNumber="+971504602733"
        message="Hello Mawared, I have a question!"
      />
      {/* End of sticky whats app btn */}

      {/* start of sticky scroll to top btn */}
      {/* <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="custom-sticky-scroll-to-page-btn-style"
        title="Go to top"
      >
        <img
          src="./img/click-icon.png"
          className="h-12 w-12 lg:h-auto lg:w-auto"
          alt="click-icon"
        />
      </button> */}
      {/* End of sticky scroll to top btn */}
    </div>
  );
};

export default Layout;
