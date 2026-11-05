import { PropsWithChildren, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: PropsWithChildren<object>) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const tokenData = localStorage.getItem("token-admin");
    router.push("https://www.hopetuyishime.com?utm_source=mybrandhope&utm_medium=portfolio_v1")
    if (!tokenData) {
      navigate("/login");
    } else {
      const admin = JSON.parse(tokenData);
      if (admin) {
         navigate(location.pathname);
      } else {
        navigate("/home");
      }
    }
  }, [location.pathname, navigate]);

  return <div> {children} </div>
}

export default ProtectedRoutes;

