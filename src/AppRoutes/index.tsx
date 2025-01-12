import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "@/containers/AboutUsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
