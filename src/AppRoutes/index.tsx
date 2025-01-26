import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AboutUsPage from "@/containers/AboutUsPage";
import HomePage from "@/containers/HomePage";
// import FeaturesPage from "@/containers/FeaturesPage";
// import FAQPage from "@/containers/FAQPage";
// import PlansPage from "@/containers/PlansPage";
// import ContactUsPage from "@/containers/ContactUsPage";
import { Toaster } from "react-hot-toast";

const AppRoutes = () => {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/features" element={<FeaturesPage />} /> */}
          {/* <Route path="/faq" element={<FAQPage />} /> */}
          {/* <Route path="/plans" element={<PlansPage />} /> */}
          {/* <Route path="/about" element={<AboutUsPage />} /> */}
          {/* <Route path="/contact" element={<ContactUsPage />} /> */}
        </Routes>
      </Router>

      {/* Start of toaster */}
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* End of toaster */}
    </>
  );
};

export default AppRoutes;
