import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialLogin from "./Component/SocialLogin";
import SocialAuthSuccess from "./Component/SocialAuthSuccess";
import Dashboard from "./Component/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialLogin />} />
        <Route path="/social-auth-success" element={<SocialAuthSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Add ToastContainer once at app level */}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
