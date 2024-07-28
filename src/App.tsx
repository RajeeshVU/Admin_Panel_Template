import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./components/header";
import SideBar from "./components/Sidebar";
import "./App.css";
import AuthContextProvider from "./context/authContext";
import Routes from "./routes";

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
        <AuthContextProvider>
        <DefaultLayout>
          <SideBar status={activeMenu} onCloseMenu={toggleMenu} />
          <div className="h-screen !w-[80%]">
            <Header toggleMenu={toggleMenu} />
            <main className="p-3 pt-2 lg:h-[90%] md:h-[90%] sm:h-auto bg-gray-100">
              <section className="h-full bg-white shadow-paperShadow overflow-y-scroll  overflow-hidden rounded-md">
             <Routes/>
              </section>
            </main>
          </div>
        </DefaultLayout>
        </AuthContextProvider>
       
      </ThemeProvider>
    </>
  );
}

export default App;
