import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "@/containers/ContactUsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
