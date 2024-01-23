import { useState } from "react";
import Menu from "./Menu";
import { useTranslation } from "react-i18next";
/* eslint-disable react/prop-types */
const Main = ({ handleOpenMenu, openMenu }) => {
  const [isShowLenguaje, setIsShowLenguaje] = useState(false);

  const handleShowLenguaje = () => {
    setIsShowLenguaje(!isShowLenguaje);
  };

  const handleSelectlenguajeEN = () => {
    handleShowLenguaje();
    i18n.changeLanguage("en");
  };
  const handleSelectlenguajeES = () => {
    handleShowLenguaje();
    i18n.changeLanguage("es");
  };
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-screen h-12 px-4 pt-4 pb-2 justify-between grid grid-cols-[auto,_auto,_auto] items-center  py-[auto] fixed bg-slate-600 z-[100]">
      <div className="justify-start items-center gap-2 flex">
        <div className="text-white text-base font-bold font-['Fira Code'] absolute bottom-2">
          Mauricio
        </div>
      </div>
      {/* nav */}
      <div className="sm:visible w-0 invisible flex gap-4 justify-center sm:w-auto">
        <a href="#home" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1 ">#</span>
          {t("main.inicio")}
        </a>
        <a
          href="#about-me"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span> {t("main.sobre-mi")}
        </a>
        <a
          href="#projects"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span> {t("main.proyectos")}
        </a>
        <a href="#skills" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1">#</span>{" "}
          {t("main.habilidades")}
        </a>

        <a href="#contact" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1">#</span> {t("main.contacto")}
        </a>
      </div>
      <div className="">
        <button
          onClick={handleOpenMenu}
          className="sm:invisible w-8 h-8 absolute top-3 right-3  "
        >
          <i className="text-slate-50 text-xl bx bx-menu-alt-right hover:text-purple-400 transition-all"></i>
        </button>
      </div>

      <div
        className={`flex gap-3 absolute right-16 p-0 transition-all ease-in-out duration-500 rounded-md sm:right-10 font-semibold${
          isShowLenguaje ? " top-1 " : " -top-20 "
        }`}
      >
        <button
          className="w-10 h-10 hover:text-purple-400 transition-all bg-slate-800 rounded-md"
          onClick={handleSelectlenguajeEN}
        >
          EN
        </button>

        <button
          className="w-10 h-10 hover:text-purple-600 font-semibold transition-all bg-white text-black rounded-md"
          onClick={handleSelectlenguajeES}
        >
          ES
        </button>
      </div>

      <button
        className={`flex gap-5 absolute top-4 right-20 transition-all duration-300 sm:right-6  ${
          isShowLenguaje ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleShowLenguaje}
      >
        <i className="bx bx-world hover:text-purple-400 transition-all from-inherit">
          Leng
        </i>
      </button>

      <Menu handleOpenMenu={handleOpenMenu} openMenu={openMenu} />
    </div>
  );
};
export default Main;

// {openMenu ? (
//   <div className="min-h-screen z-[100] grid font-bold fixed top-5 right-5 text-4xl p-5 transition-all duration-500 invisible">
//     <Menu handleOpenMenu={handleOpenMenu} openMenu={openMenu}/>
//   </div>
// ) : (
//   <div className="absolute ">
//     <Menu />
//   </di
