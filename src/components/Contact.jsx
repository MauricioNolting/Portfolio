import copy from "copy-to-clipboard"
import { useState } from "react"
import NumberCopied from "./NumberCopied"

const Contact = () => {
  const [isShowModal, setIsShowModal] = useState(false)

   const copyNumber = () => {
    copy("+54 1162677362")
    setIsShowModal(true)
   }
  return (
    <div className="h-auto my-10 w-screen">
       
        <div className="justify-start items-start flex sm:pl-10 my-5">
    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
    <div className="text-white text-[32px] font-medium font-['Fira Code']">Contact</div>
    <img className="relative top-6 w-[150px] sm:w-auto sm:border-none border-2 border-purple-400" src="/Line.png" alt="" />
      </div>
      
<section className="h-auto sm:grid sm:grid-cols-2 sm:grid-rows-[auto,1fr] mx-5 flex-auto sm:gap-2 gap-3 w-full">

        
      <div id="contact"  className="sm:max-w-[400px] max-w-[300px] min-w[100px] mx-auto text-justify border p-2 max-h-auto grid place-content-center col-span-1 row-span-1">
        <p className="m-5 sm:m-5">I am interested in opportunities and would be grateful if you could consider me for any projects. I am fully available and ready to contribute with my experience and skills. Please do not hesitate to contact me if you need more information or if there are any other questions or requests I can assist you with.</p>
      </div>

      {/* contacto */}

      <div className="row-start-2 col-start-1 my-auto mx-auto sm:visible invisible line-clamp-1">
      <i className='bx bx-chevron-right bx-flashing  font-bold text-5xl' ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl'  ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl  font-bold' ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl'  ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl  font-bold' ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl'  ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl  font-bold' ></i>
      <i className='bx bx-chevron-right bx-flashing text-5xl'  ></i>
      </div>

    <div className="sm:invisible visible w-[20px] mx-auto my-auto text-4xl grid grid-cols-1">
      <i className='bx bx-chevron-down bx-flashing mx-auto' ></i>
      <i className='bx bx-chevron-down bx-flashing mx-auto' ></i>
      <i className='bx bx-chevron-down bx-flashing mx-auto' ></i>
      </div>

      <div className="grid sm:h-[160px] sm:w-[300px] w-[300px]  h-[100px] col-start-2 row-start-2 border rounded-sm mt-7 mx-auto">
   
        <h5 className="font-bold mx-auto my-auto">Contact me!</h5>
       
       
          <a className="flex my-auto px-2 mx-auto hover:text-purple-400 hover:font-semibold" href="mailto:mauricionolting@gmail.com" target="_blank" rel="noreferrer"><i className='bx bxl-gmail mx-3 my-auto'></i>mauricionolting@gmail.com</a>
       
    
          <button onClick={copyNumber} id="pohneNumber" className="hover:text-purple-400 transition-all hover:font-semibold hover:text-lg line-clamp-1 my-auto px-2 mx-auto"><i className='bx bxs-phone mx-3 my-auto'></i>+54 1162677362</button>

         
      
      <div>

      </div>
            
      </div>
      {
        isShowModal && <NumberCopied isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      }
     

</section>

    </div>
  )
}
export default Contact