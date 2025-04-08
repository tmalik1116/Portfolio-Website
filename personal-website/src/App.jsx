import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import ProjectMenu from './ProjectMenu'
import StarBackground from './StarBackground'
import AboutMe from './AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="" id="main-container">
        <NavBar />

        <StarBackground />

        <AboutMe className="mt-0"/>
        
        <div className="mt-10 mb-5 z-50"></div>
        <ProjectMenu />
        {/* <ProjectMenu />
        <ProjectMenu />
        <ProjectMenu /> */}
      </div>
      
    </>
  )
}

export default App
