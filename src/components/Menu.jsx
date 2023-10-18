/* eslint-disable react/prop-types */
const Menu = ({handleOpenMenu}) => {
  return (
    <div className={`min-h-screen z-50 grid font-bold fixed right-0 text-4xl top-0 bg-[red] p-5`}>
        <a href="#home">#Skills</a>
        <a href="#projects">#Projects</a>
        <a href="#skills">#Skills</a>
        <a href="#about-me">#About Me</a>
        <button onClick={handleOpenMenu} className="absolute">x</button>
    </div>
  )
}
export default Menu