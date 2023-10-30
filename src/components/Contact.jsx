const Contact = () => {
  return (
    <div className="min-h-screen mt-10">
        {/* <h3 className="text-center font-bold text-lg">Contact me!</h3>
        <form className="flex flex-col sm:max-w-[500px] max-w-[300px] mx-auto gap-5 ">
            <div className="grid gap-2">
            <label htmlFor="">First name</label>
            <input className="rounded-md px-3 h-9 text-black" type="text" />
            </div>
            <div className="grid gap-2">
            <label htmlFor="">Last name</label>
            <input className="rounded-md px-3 h-9 text-black" type="text" />
            </div>
            <div className="grid gap-2">
            <label htmlFor="">Email</label>
            <input className="rounded-md px-3 h-9 text-black" type="text" />
            </div>
            <div className="grid gap-2">
            <label htmlFor="">Tel</label>
            <input className="rounded-md px-3 h-9 text-black" type="number" />
            <button type="sumit" className="border-2 w-[150px] mx-auto mt-5 rounded-md hover:text-purple-400 hover:bg-white transition-all duration-400">Submit</button>
            </div>
        </form> */}
        <div className="justify-start items-start flex sm:pl-10 my-5">
    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
    <div className="text-white text-[32px] font-medium font-['Fira Code']">Contact</div>
    <img className="relative top-6 w-[150px] sm:w-auto sm:border-none border-2 border-purple-400" src="/Line.png" alt="" />
      </div>
      
<section className="h-auto sm:grid sm:grid-cols-2 sm:grid-rows-[auto,1fr] mx-5 flex-auto sm:gap-2 gap-3">

        
      <div className="max-w-[400px] min-w[100px] sm:mx-6 mx-2 text-justify border p-2 max-h-[160px] grid place-content-center col-span-1 row-span-1 overflow-auto">
        <p className="m-5 sm:m-5">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
      </div>

      {/* contacto */}

      <div className="grid sm:h-[200px] sm:min-w-[200px] w-auto h-[100px] col-start-2 row-start-2 border border-purple-600 rounded-sm mt-7">
   
        <h5 className="font-bold mx-auto my-auto">Contact me!</h5>
       
       
          <a className="flex my-auto px-2 mx-auto hover:text-purple-400 transition-colors" href="mailto:mauricionolting@gmail.com" target="_blank" rel="noreferrer"><i className='bx bxl-gmail mx-3 my-auto'></i>mauricionolting@gmail.com</a>
       
    
          <p className="line-clamp-1 my-auto px-2 mx-auto"><i className='bx bxs-phone mx-3 my-auto'></i>+54 01162677362</p>
         
      
      <div>

      </div>
      </div>



</section>

    </div>
  )
}
export default Contact