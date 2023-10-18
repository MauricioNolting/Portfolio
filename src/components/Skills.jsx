


const Skills = () => {
  return (
    <div className="mx-auto my-9 h-[300px] relative z-50">
       <h1 className="mb-4 text-2xl border-2 bg-[#ea07bc4b] px-4 min-w-[250px] max-w-[300px] h-10 my-auto sm:ml-[50px] ml-[10px]">#Skills====={">"}</h1>



       
       <div className="flex gap-3 flex-row-reverse pr-9 flex-wrap relative z-10">
          <section className="grid gap-3">  
          
              <div className="border-2 w-[200px] my-2">
                <h3 className="font-bold border-b-2">Lenguajes</h3>
                <ul>
                  <li>JavaScript</li>
               </ul>
              </div>
              <div className="border-2 w-[200px] my-2">
                <h3 className="font-bold border-b-2">Tools</h3>
                <ul>
                  <li>VSCode</li>
                  <li>Figma</li>
               </ul>
              </div>
          </section>

          <section>
          <div className="border-2 w-[200px] my-2">
                <h3 className="font-bold border-b-2">Databases</h3>
                <ul>
                  <li>Nil</li>
               </ul>
            </div>
            
              <div className="border-2 w-[200px] my-2">
                <h3 className="font-bold border-b-2">Other</h3>
                <ul>
                  <li>HTML, CSS</li>
               </ul>
              </div>
          </section>

          <section>
          <div className="border-2 w-[200px] my-2">
                <h3 className="font-bold border-b-2">Frameworks</h3>
                <ul>
                  <li>Nil</li>
               </ul>
              </div>
          </section>
          </div>

          <div className="absolute bottom-8 left-20 z-[-1] w-[100px]" >
                <img src="/logo/logoLineas.png" alt="" />
          </div>

        
    </div>
  )
}
export default Skills