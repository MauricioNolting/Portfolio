import Menu from "./Menu"

/* eslint-disable react/prop-types */
const Main = ({handleOpenMenu, openMenu}) => {
  return (

    <div className="min-w-full h-12 px-4 pt-4 pb-2 justify-between items-center inline-flex py-[auto] fixed bg-slate-600 z-[100]">
  <div className="justify-start items-center gap-2 flex">
    <div className="w-4 h-4 relative">
      <img className="w-4 h-4 left-0 my-[auto]" src="/logo/logoLetraM.png" />
    </div>
    <div className="text-white text-base font-bold font-['Fira Code']">Mauricio</div>
  </div>
  <button onClick={handleOpenMenu} className="w-6 h-6 right-5 absolute">
      <i className='text-slate-50 text-xl bx bx-menu-alt-right'></i>
  </button>
  { openMenu ? <div className="visible min-h-screen z-[100] grid font-bold fixed top-5 right-5 text-4xl bg-[red] p-5 transition-all duration-500"><Menu handleOpenMenu={handleOpenMenu}/></div> : <div className="invisible"><Menu/></div>}
  

</div>
  )
}
export default Main

