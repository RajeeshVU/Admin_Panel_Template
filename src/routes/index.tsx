import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";

interface RoutesProps {}

const Routes: FC<RoutesProps> = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === "token") {
        console.log(localStorage.getItem("token"))
        setIsAuthenticated(!localStorage.getItem("token"));
      }
    };

   
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
console.log(isAuthenticated)
  return (<>{isAuthenticated==true ? <ProtectedRoutes /> : <PublicRoutes />}</>);
};

export default Routes;
