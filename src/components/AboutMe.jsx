const AboutMe = () => {
  return (
    <div id="about-me">
             <div className="justify-start items-start flex">
    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
    <div className="text-white text-[32px] font-medium font-['Fira Code']">About me</div>
    <img className="relative top-6 w-[150px] sm:w-auto sm:border-none border-2 border-purple-400" src="/Line.png" alt="" />
  </div>
           <div className="max-w-[600px] text-justify mx-auto font-thin px-4">
            <p className="leading-3 hover:leading-6 transition-all hover:text-purple-300 h-[300px] flex items-center pt-5 mt-3">
                Hello, i am Mauricio Nolting
                <br/>
                <br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui non dolor officiis soluta neque consequuntur nostrum numquam optio eum incidunt voluptates laboriosam, corporis vitae iste in cumque ipsam minus?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ad. Alias nobis error ut blanditiis aperiam quas commodi, labore delectus, at quos assumenda, eum ipsam incidunt! Vero aliquid magni quidem!
            </p>
           </div>
    </div>
  )
}
export default AboutMe