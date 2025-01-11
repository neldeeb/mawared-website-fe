import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturesPage from "@/containers/FeaturesPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<FeaturesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
