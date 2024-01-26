import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Imagen from "./components/Imagen";
import Main from "./components/Main";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [openMenu, setopenMenu] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleOpenMenu = () => {
    setopenMenu(!openMenu);
  };

  return (
    <div className="font-['Fira_Code',monospace;] text-white bg-gray-800 min-h-screen min-w-max grid justify-center m-0 dark:bg-white dark:text-slate-900">
      <Main
        handleOpenMenu={handleOpenMenu}
        openMenu={openMenu}
        handleChangeTheme={handleChangeTheme}
        theme={theme}
      />

      <Home />
      <Imagen />
      <AboutMe />
      {/* mostrar los proyectos */}
      <Proyects />
      <Skills />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
