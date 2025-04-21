import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import ProjectMenu from './ProjectMenu'
import StarBackground from './StarBackground'
import AboutMe from './AboutMe'
import ExperienceMenu from './ExperienceMenu'
import ContactMenu from './ContactMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="" id="main-container">

        <div className="scrollable-background">
          <StarBackground />
        </div>

        <div className="content-container w-full overflow-x-hidden">
          <NavBar />
          <div className="pt-20 flex flex-col items-center w-full">
            <AboutMe />
            <div className="mt-10 mb-5"></div>
            <ExperienceMenu />
            <div className="mt-10 mb-5"></div>
            <ProjectMenu />
            <div className="mt-10 mb-5"></div>
            <ContactMenu />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
