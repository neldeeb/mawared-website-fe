import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPage from "../containers/FAQPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
