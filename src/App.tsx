import { useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes} from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";
import ProtectedRoutes from "./routes/protectedRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
 

  return (
    <>
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<PublicRoutes />} />
          <Route path="/dashboard/*" element={<ProtectedRoutes />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
