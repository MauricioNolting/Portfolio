/* eslint-disable react/prop-types */
const Menu = ({handleOpenMenu}) => {
  return (
    <div className={`min-h-screen z-50 grid font-bold fixed  right-0 text-xl top-0 bg-gray-800 p-5`}>
      <div className="flex flex-col gap-5 ">
        <a href="#home" className=" hover:text-purple-400 transition-colors" ><span className="text-purple-400 mr-1 ">#</span>Home</a>
        <a href="#projects" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>Projects</a>
        <a href="#skills" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>Skills</a>
        <a href="#about-me" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>About-me</a>
        <a href="#contact" className=" hover:text-purple-400 transition-colors"><span className="text-purple-400 mr-1">#</span>Contact</a>
        </div>
        <button onClick={handleOpenMenu} className="absolute top-1 right-1 hover:text-purple-400 transition-colors rounded-full w-8 ">x</button>
    </div>
  )
}
export default Menu