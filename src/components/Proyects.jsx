
import proyects from "../db/proyects.json"
import CardProyects from "./CardProyects"

const Proyects = () => {


  return (
    <main className="mx-auto"> 
       <div className="justify-start items-start flex pl-10 ">
    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
    <div id="projects" className="text-white text-[32px] font-medium font-['Fira Code']">Projects</div>
    <img className="relative top-6 w-[170px] sm:w-auto sm:border-none border-2 border-purple-400" src="/Line.png" alt="" />
  </div>
    <section className="flex mx-auto gap-3 text-sm max-w-[700px] flex-wrap justify-around">
       
        { 
    proyects.map((proyect) => <CardProyects key={proyect.title} proyect={proyect}/>)
        }
        </section>
        </main>
  )
}
export default Proyects