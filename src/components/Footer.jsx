const Footer = () => {
  return (
    <div className="min-w-full h-[180px] bg-slate-900 flex items-center">
        <ul className="grid gap-4 text-md p-6">
            <li className="hover:text-purple-400 transition-all"><a href=""><i className='bx bx-envelope text-purple-400 px-1' ></i>Email</a> </li>
            <li className="hover:text-purple-400 transition-all"><a href=""><i className='bx bxl-instagram text-purple-400 px-1' ></i>Instagram</a> </li>
            <li className="hover:text-purple-400 transition-all"><a href="mailto:mauricionolting@gmail.com" target="_blank" rel="noreferrer"><i className='bx bxl-meta text-purple-400 px-1' ></i>Facebook</a></li>
        </ul>
    </div>
  )
}
export default Footer