import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialLogin from "./Component/SocialLogin";
import SocialAuthSuccess from "./Component/SocialAuthSuccess";
import Dashboard from "./Component/Dashboard";
import ProtectedRoute from "./Component/ProtectedRoute"; // Import here
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialLogin />} />
        <Route path="/social-auth-success" element={<SocialAuthSuccess />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
