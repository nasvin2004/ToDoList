// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialLogin from "./Component/SocialLogin";
import SocialAuthSuccess from "./Component/SocialAuthSuccess";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialLogin />} />
        <Route path="/social-auth-success" element={<SocialAuthSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* You can add a NotFound route as fallback */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
