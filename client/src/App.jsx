import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import HoneyMoon from "./pages/HoneyMoon";
import Premium from "./pages/Premium";
import Luxury from "./pages/Luxury";
import BestSeller from "./pages/BestSeller";
import Blog from "./pages/Blog";
import TermsConditions from "./pages/TermsConditions";
import Packages from "./pages/Packages";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/admin-login" element={<Login />} />
      <Route
        path="/admin-panel"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Home />} />
      <Route path="/honeymoon" element={<HoneyMoon />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/luxury" element={<Luxury />} />
      <Route path="/best-seller" element={<BestSeller />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/packages" element={<Packages />} />
    </Routes>
  );
};

export default App;
