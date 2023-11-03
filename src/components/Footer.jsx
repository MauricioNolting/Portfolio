const Footer = () => {
  return (
    <div className="min-w-full relative h-[180px] bg-slate-900 flex items-center">
        <div className="flex items-center justify-between w-full ">
        <span className="text-sm ml-2 sm:ml-12">Web designer and front-end developer</span>
        <ul className="grid gap-2 text-sm p-6 absolute right-0 sm:mr-16">
            <li className="hover:text-purple-400 transition-all"><a target="_blank" rel="noreferrer"  href="https://www.facebook.com/mauricio.nolting/"><i className='bx bxl-meta text-purple-400 px-1' ></i>Facebook</a> </li>
            <li  className="hover:text-purple-400 transition-all"><a href="https://www.instagram.com/mauri_rnd/" target="_blank" rel="noreferrer"><i className='bx bxl-instagram text-purple-400 px-1' ></i>Instagram</a> </li>
            <li className="hover:text-purple-400 transition-all"><a href="mailto:mauricionolting@gmail.com" target="_blank" rel="noreferrer"><i className='bx bx-envelope text-purple-400 px-1' ></i>Email</a></li>
            <li className="hover:text-purple-400 transition-all"><a href="https://github.com/MauricioNolting" target="_blank" rel="noreferrer"><i className='bx bxl-github text-purple-400 px-1' ></i>Git</a></li>
        </ul>
        
        </div>

        <div className="absolute bottom-0 text-xs font-light w-full grid justify-center">
          <span>Copyright 2023. Made by Mauricio</span>
        </div>
    </div>
  )
}
export default Footer