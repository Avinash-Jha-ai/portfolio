import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Project from './pages/project'
import Skill from './pages/skill'
import Nav from './components/nav'
import Foot from './components/footer'
import Edu from './pages/edu'
const App = () => {
  return (
    <div>
      <Nav />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/education' element={<Edu />} />
      </Routes>
      <Foot />
    </div>
  )
}

export default App
