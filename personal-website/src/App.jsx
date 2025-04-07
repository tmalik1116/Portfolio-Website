import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import ProjectMenu from './ProjectMenu'
import StarBackground from './StarBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main-container">
        <NavBar />

        <StarBackground />
        
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
