import './App.css'
import Home from './components/Home'
import Imagen from './components/Imagen'
import Main from './components/Main'
import Proyects from './components/Proyects'
import Skills from './components/Skills'

function App() {


  return (
   <div className="font-['Fira_Code',monospace;] text-white bg-gray-800 min-h-screen">
      <Main/>
      <Home/>
      <Imagen/>

      {/* mostrar los proyectos */} 
      <Proyects/>
      <Skills/>
   </div>
  )
}

export default App
