import Footer from "../Footer";
import Navbar from "../Navbar";

// define layout children props type
type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Start of navbar component */}
      <Navbar />
      {/* End of navbar component */}

      {/* Start of children of layout */}

      <main className="flex-grow">{children}</main>
      {/* End of children of layout */}

      {/* Start of footer component */}
      <Footer />
      {/* End of footer component */}
    </div>
  );
};

export default Layout;
