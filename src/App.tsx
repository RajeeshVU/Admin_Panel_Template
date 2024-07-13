import { useEffect, useState } from "react";
import ThemeButton from "./components/themeButton/ThemeButton";
import useTheme, { ThemeProvider } from "./context/themeContext";
import { useLocation } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./components/header";
import SideBar from "./components/Sidebar";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [active, setActive] = useState<boolean | undefined>();
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

  const getValue = (status: boolean) => {
    console.log(status)
   setActive(status)
   console.log(active)
  };
  console.log(activeMenu)
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <DefaultLayout>
          <SideBar status={activeMenu}  onCloseMenu={toggleMenu} />
          <div className="h-screen w-full">
          <Header toggleMenu={toggleMenu}  />
          <main>
<h1>hello</h1>
          </main>
          </div>
      
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
