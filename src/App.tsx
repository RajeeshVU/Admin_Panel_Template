import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./components/header";
import SideBar from "./components/Sidebar";
import { Routes,Route } from "react-router-dom";
import Appointment from "./pages/appointment/Appointment";
import Notification from "./pages/notification/Notification";
import Records from "./pages/records/Records";
import Registration from "./pages/registration/Registration";
import Status from "./pages/status/Status";
import './App.css'
import AdmissionRoutes from "./pages/admission/Route";
import DoctorRoute from "./pages/doctors/DoctorsRoute";
import Settings from "./pages/settings/Settings";
import Login from "./features/login/Login";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [activeMenu, setActiveMenu] = useState(false);
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <DefaultLayout>
          <SideBar status={activeMenu} onCloseMenu={toggleMenu} />
          <div className="h-screen !w-[80%]">
            <Header toggleMenu={toggleMenu} />
            <main className="p-3 pt-2 lg:h-[90%] md:h-[90%] sm:h-auto bg-gray-100">
            <section className="h-full bg-white shadow-paperShadow overflow-y-scroll  overflow-hidden rounded-md">
           
            <Routes>
            <Route path='/' element={<Login/>}/>
              <Route path='/appointment' element={<Appointment/>}/>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/records' element={<Records/>}/>
              <Route path='/admissions*' element={<AdmissionRoutes/>}/>
              <Route path='/doctors*' element={<DoctorRoute/>}/>
              <Route path='/notifications' element={<Notification/>}/>
              <Route path='/settings' element={<Settings/>}/>
             </Routes>
            </section>
            
            </main>
          </div>
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
