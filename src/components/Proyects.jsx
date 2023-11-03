
import proyects from "../db/proyects.json"
import CardProyects from "./CardProyects"

const Proyects = () => {


  return (
    <main className="mx-auto"> 
       <div className="justify-start items-start flex sm:pl-10 ">
    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
    <div id="projects" className="text-white text-[32px] font-medium font-['Fira Code']">Projects</div>
    <img className="relative top-6 w-[170px] sm:w-auto sm:border-none border-2 border-purple-400" src="/Line.png" alt="" />
  </div>
    <section className="mx-auto gap-4 text-sm max-w-[900px] grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] justify-around">
       
        { 
    proyects.map((proyect) => <CardProyects key={proyect.title} proyect={proyect}/>)
        }
        </section>
        </main>
  )
}
export default Proyects