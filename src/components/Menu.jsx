/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

const Menu = ({ handleOpenMenu, openMenu }) => {
  const [t] = useTranslation("global");
  return (
    <div
      className={`h-[250px] border z-50 grid font-bold text-xl bg-gray-800/90 p-5 w-[200px] transition-all duration-500 ${
        openMenu ? "fixed right-2 top-2" : "fixed -right-52 top-2"
      }`}
    >
      <div className="flex flex-col gap-5 ">
        <a href="#home" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1 ">#</span>
          {t("main.inicio")}
        </a>
        <a
          href="#projects"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span>
          {t("main.proyectos")}
        </a>
        <a href="#skills" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1">#</span>
          {t("main.habilidades")}
        </a>
        <a
          href="#about-me"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span>
          {t("main.sobre-mi")}
        </a>
        <a href="#contact" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1">#</span>
          {t("main.contacto")}
        </a>
      </div>
      <button
        onClick={handleOpenMenu}
        className="relative bottom-[240px] left-[100px] hover:text-red-400 transition-all w-8 "
      >
        <i className="bx bx-exit"></i>
      </button>
    </div>
  );
};
export default Menu;
