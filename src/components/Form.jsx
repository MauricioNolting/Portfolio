const Form = () => {
  return (
    <div className="min-h-screen mt-10">
        <h3 className="text-center font-bold text-lg">Contact me!</h3>
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
        </form>
    </div>
  )
}
export default Form