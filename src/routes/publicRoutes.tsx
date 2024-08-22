import { FC, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import ResetPassword from "../features/resetPassword/ResetPassword";
import Login from "../features/login/Login";
import useTheme from "../context/themeContext";
import authContext, { useAuth } from "../context/authContext";


interface PublicRoutesProps {}

const PublicRoutes: FC<PublicRoutesProps> = ({}) => {
  const {lightTheme}=useTheme()
  const navigate=useNavigate()
  const {token}=useAuth()
  console.log(token)
  useEffect(() => {
    if(token !==null)
    {
      // navigate('/dashboard')
    }
  }, [token]);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/password__reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );
};

export default PublicRoutes;
