import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Imagen from './components/Imagen'
import Main from './components/Main'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {

  const [openMenu, setopenMenu] = useState(false)

  const handleOpenMenu = () => {
    setopenMenu(!openMenu)
  }


  return (
   <div className="font-['Fira_Code',monospace;] text-white bg-gray-800 min-h-screen">
      <Main handleOpenMenu={handleOpenMenu} openMenu={openMenu}/>
      <Home/>
      <Imagen/>

      {/* mostrar los proyectos */} 
      <Proyects/>
      <Skills/>
      <AboutMe/>
      <Form/>
      <Footer/>
   </div>
  )
}

export default App
