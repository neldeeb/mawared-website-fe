import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlansPage from "../containers/PlansPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PlansPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
