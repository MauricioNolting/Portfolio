const Imagen = () => {
  return (
    <div className="w-96  mx-[auto]">
      <div className="min-w-full mx-[auto]">
        
        <img
          className="w-[400px] h-[350px] object-cover relative mx-[auto] z-10"
          src="/tipoConCapucha.png"
        />
        <img
          className="relative bottom-72 object-cover left-[20%] h-28"
          src="\logo\logoLineas.png"
          alt="lineasLogo"
        />
         
        <div className="border-2 border-[#ABB2BF]  bg-[#3028338a] w-[302px] h-[58px] bottom-[170px] mx-auto z-30 relative flex justify-start items-center gap-3">  
            <div className="h-4 w-4 bg-[#C778DD] ml-3"></div>
            <p className="text-sm "> <span className="font-bold">Portafolio</span> actualmente en trabajo</p>

        </div>
      </div>
      

        {/* Trabajando en el portafolio */}
    
      
    </div>
  );
};
export default Imagen;
