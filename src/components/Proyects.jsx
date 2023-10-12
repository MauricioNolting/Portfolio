
import proyects from "../db/proyects.json"
import CardProyects from "./CardProyects"

const Proyects = () => {


  return (
    <main>
        <h1 className="mb-4 text-2xl border-2 bg-[#ea07bc4b] px-4 min-w-[250px] max-w-[300px] h-10 mx-auto my-auto">#Proyects====={">"}</h1>
    <section className="flex mx-auto gap-3 text-sm max-w-[400px] flex-wrap justify-center">
       
        { 
    proyects.map((proyect) => <CardProyects key={proyect.title} proyect={proyect}/>)
        }
        </section>
        </main>
  )
}
export default Proyects