import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Imagen from './components/Imagen'
import Main from './components/Main'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const [openMenu, setopenMenu] = useState(false)

  const handleOpenMenu = () => {
    setopenMenu(!openMenu)
  }


  return (
   <div className="font-['Fira_Code',monospace;] text-white bg-gray-800 min-h-screen w-screen grid justify-center">
    <Main handleOpenMenu={handleOpenMenu} openMenu={openMenu}/>
    <div className='max-w-[1100px] overflow-auto mx-auto px-6'>
      
      <Home/>
      <Imagen/>

      {/* mostrar los proyectos */} 
      <Proyects/>
      <Skills/>
      <AboutMe/>
      <Contact/>
    </div>

    <div className='w-screen'>
      <Footer/>
    </div>
  </div>
  )
}

export default App
