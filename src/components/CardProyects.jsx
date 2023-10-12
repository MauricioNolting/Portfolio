/* eslint-disable react/prop-types */
const CardProyects = ({proyect}) => {

  return (
    <article className="basis-52 max-w-[160px] border-2 ">
        <img className="border-2" src={proyect.img} alt="" /> 
        <ul className="border-b-2 text-xs px-2">
         <li>{proyect.leng}</li>
        </ul>
        <h3 className="font-bold text-center">{proyect.title}</h3>
        <p className="text-start">{proyect.description}</p>
        <a className="cursor-pointer" target="_blank" rel="noopener noreferrer" href={proyect.link}>Link</a>
     </article> 
 
  )
}
export default CardProyects