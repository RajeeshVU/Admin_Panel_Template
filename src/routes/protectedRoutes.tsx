import {
  FC,
  lazy,
  useEffect,
  useState,
} from "react";
import Header from "../components/header";
import SideBar from "../components/Sidebar";
import DefaultLayout from "../layout/DefaultLayout";
import authContext, { useAuth } from "../context/authContext";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

interface ProtectedRoutesProps {}
const Appointment = lazy(() => import("../pages/appointment/Appointment"));
const Registration = lazy(() => import("../pages/registration/Registration"));
const Records = lazy(() => import("../pages/records/Records"));
const AdmissionRoutes = lazy(() => import("../pages/admission/Route"));
const DoctorRoute = lazy(() => import("../pages/doctors/DoctorsRoute"));
const Settings = lazy(() => import("../pages/settings/Settings"));
const Notification = lazy(() => import("../pages/notification/Notification"));

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({}) => {
  const [themeMode, setThemeMode] = useState("light");
  const [activeMenu, setActiveMenu] = useState(false);
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const {token}=useAuth()
  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

    window.addEventListener("storage",()=>{
      setAuth(false)
    })
  
  useEffect(() => {
    if(token == null || auth==false)
      {
        navigate('/')
      }
  }, [token,auth]);
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
    {
      token == 'null'  ? 
      <Navigate to="/" replace={true} />:
      <DefaultLayout>
        <SideBar status={activeMenu} onCloseMenu={toggleMenu} />
        <div className="h-screen  w-[100%] md:w-[70%] lg:w-[80%]">
          <Header toggleMenu={toggleMenu} />
          <main className="lg:p-3 pt-2 relative !md:p-2 !sm:p-0 lg:h-[90%] md:h-[90%]  sm:h-auto bg-gray-100">
            <section className="h-full bg-white relative shadow-paperShadow overflow-y-scroll  overflow-hidden rounded-md">
              <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/records" element={<Records />} />
                <Route path="/admissions*" element={<AdmissionRoutes />}/>
                <Route path="/doctors*" element={<DoctorRoute />}/>
                <Route path="/notifications" element={<Notification />}/>
                <Route path="/settings" element={<Settings />}/>
              </Routes>
            </section>
          </main>
        </div>
      </DefaultLayout>
     
    }
      
    </>
  );
};

export default ProtectedRoutes;
