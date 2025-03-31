import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import ProjectMenu from './ProjectMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        {/* <div className="mt-10 mb-5"></div> */}
        <ProjectMenu />
      </div>
      
    </>
  )
}

export default App
