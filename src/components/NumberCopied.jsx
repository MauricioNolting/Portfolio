/* eslint-disable react/prop-types */
const NumberCopied = ({setIsShowModal}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 border w-full   bg-black/50 z-50 transition-all">
     
     <div className="absolute grid top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  mt-16 grid-rows-2 gap-4">
        <span className="mx-auto my-auto">Number copied</span>
        <button onClick={() => setIsShowModal(false)} className="mx-auto my-auto border rounded-lg px-4 py-2 hover:bg-black/40 transition-colors">Acept</button>
        </div>
        
    </div>
  )
}
export default NumberCopied