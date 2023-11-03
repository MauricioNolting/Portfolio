import Menu from "./Menu";

/* eslint-disable react/prop-types */
const Main = ({ handleOpenMenu, openMenu }) => {
  return (
    <div className="w-screen h-12 px-4 pt-4 pb-2 justify-between grid grid-cols-[auto,_auto,_auto] items-center  py-[auto] fixed bg-slate-600 z-[100]">
      <div className="justify-start items-center gap-2 flex">
        
        <div className="text-white text-base font-bold font-['Fira Code'] absolute bottom-2">
          Mauricio
        </div>
      </div>
      {/* nav */}
      <div className="sm:visible w-0 invisible flex gap-10 justify-center sm:w-auto">
        <a href="#home" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1 ">#</span>Home
        </a>
        <a
          href="#projects"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span>Projects
        </a>
        <a href="#skills" className=" hover:text-purple-400 transition-colors">
          <span className="text-purple-400 mr-1">#</span>Skills
        </a>
        <a
          href="#about-me"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span>About-me
        </a>
        <a
          href="#about-me"
          className=" hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400 mr-1">#</span>Contact
        </a>
      </div>
      <div className="">
        <button onClick={handleOpenMenu} className="sm:invisible w-8 h-8 absolute top-3 right-3  ">
          <i className="text-slate-50 text-xl bx bx-menu-alt-right hover:text-purple-400 transition-all"></i>
        </button>
      </div>
    
          <Menu handleOpenMenu={handleOpenMenu} openMenu={openMenu}/>
   
  
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