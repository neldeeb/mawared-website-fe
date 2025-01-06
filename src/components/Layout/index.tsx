import Footer from "../Footer";
import Navbar from "../Navbar";

// define layout children props type
type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* Start of navbar component */}
      <Navbar />
      {/* End of navbar component */}

      {/* Start of children of layout */}
      {children}
      {/* End of children of layout */}

      {/* Start of footer component */}
      <Footer />
      {/* End of footer component */}
    </>
  );
};

export default Layout;
