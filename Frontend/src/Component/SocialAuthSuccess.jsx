import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SocialAuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      toast.success("login SuccessFully");
      navigate("/dashboard");
      console.log(token);
    } else {
      console.log("error");
      navigate("/");
    }
  }, [location, navigate]);

  return <p>Logging in...</p>;
};

export default SocialAuthSuccess;
