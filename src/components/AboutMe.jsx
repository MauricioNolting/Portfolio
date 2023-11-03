const AboutMe = () => {
  return (
    <div id="about-me">
             <div id="contact" className="justify-start items-start flex sm:pl-10">
    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
    <div className="text-white text-[32px] font-medium font-['Fira Code']">About me</div>
    <img className="relative top-6 w-[150px] sm:w-auto sm:border-none border-2 border-purple-400" src="/Line.png" alt="" />
  </div>
           <div className="max-w-[600px] text-justify mx-auto font-thin px-4">
            <div className="flex justify-between">
           <i className='bx bxs-invader'></i>
           <i className='bx bxs-invader animate-bounce '></i>
           <i className='bx bxs-invader'></i>
           </div>
            <p className="leading-3 hover:leading-6 transition-all text-purple-300 hover:font-semibold hover:text-white hover:p-3 duration-400 hover:h-auto rounded-lg h-[300px] flex items-center pt-5 mt-3 hover:bg-purple-400/20">
            
                Hello, i am Mauricio Nolting
                <br/>
                <br/> 
                    a dedicated and responsible 26-year-old professional with a passion for technology. I am a skilled full-stack developer and hold a degree in Maritime Security. My commitment to excellence and my strong work ethic drive me to create innovative and efficient solutions. I thrive in challenging environments, where I can utilize my technical expertise to solve problems and deliver high-quality results. I am constantly seeking opportunities to expand my knowledge and skills, and I am excited about the prospect of contributing to meaningful projects. Let´s work together to turn ideas into reality.
                <br/>
                <br/>
                
                I want to express my sincere gratitude for taking the time to read the above. It represents not only my personal journey but also my dreams and aspirations.
            </p>
          
           </div>
    </div>
  )
}
export default AboutMe