import React from 'react'
import AboutMe from './Components/AboutMe/AboutMe'
import Interests from './Components/Interests/Interests'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <AboutMe/>
      <Interests/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App