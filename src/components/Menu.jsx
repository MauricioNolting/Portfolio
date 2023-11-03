/* eslint-disable react/prop-types */
const Menu = ({handleOpenMenu, openMenu}) => {
  return (
    <div className={`h-[250px] border z-50 grid font-bold text-xl bg-gray-800/90 p-5 transition-all duration-500 ${openMenu ? "fixed right-1 top-1" : "fixed -right-56 top-0"}`}>
      <div className="flex flex-col gap-5 ">
        <a href="#home" className=" hover:text-purple-400 transition-colors" ><span className="text-purple-400 mr-1 ">#</span>Home</a>
        <a href="#projects" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>Projects</a>
        <a href="#skills" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>Skills</a>
        <a href="#about-me" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>About-me</a>
        <a href="#contact" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>Contact</a>
        </div>
        <button onClick={handleOpenMenu} className="relative bottom-[240px] left-[100px] hover:text-red-400 transition-all w-8 "><i className='bx bx-exit'></i></button>
    </div>
  )
}
export default Menu