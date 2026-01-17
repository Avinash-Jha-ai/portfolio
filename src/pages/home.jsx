import React from 'react'
import Skill from './skill'
import Edu from './edu'
import Contact from './contact'
import Project from './project'
const home = () => {
  return (
    <>
      <div>
        <div className='hometab'>
          <div className='content'>
              <h1>Hi, I'm <span>Avinash Jha</span></h1>
              <p>A <span>Full-Stack Developer</span> and Tech Educator passionate about building elegant digital solutions and teaching the next generation of coders.</p>
          </div>
          <div className='imgcontent'>
            
          </div>
          
        </div>
      </div>
      <Skill />
      <Edu />
      <Project />
      <Contact />
    </>
  )
}

export default home
