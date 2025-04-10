import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import ProjectMenu from './ProjectMenu'
import StarBackground from './StarBackground'
import AboutMe from './AboutMe'
import ExperienceMenu from './ExperienceMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="" id="main-container">

        <div className="scrollable-background">
          <StarBackground />
        </div>

        <div className="content-container">
          <NavBar />
          <div className="pt-20">
            <AboutMe className="pt-50"/>
            
            <div className="mt-10 mb-5 z-50"></div>
            <ProjectMenu />
            <ExperienceMenu className="justify-center"/>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
