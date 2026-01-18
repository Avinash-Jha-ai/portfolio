import React from 'react'
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <div>
      <div>
        <nav>
          <div className='nav-bar'>
            <div className='logo'>
              <a href='/'>
                <h1>Avinash</h1>
              </a>
            </div>
            <div className='right'>
              <div className='home'>
                <p ><Link to="/">Home</Link></p>
              </div>
              <div className='skill'>
                <p><Link to="/Skill">Skill</Link></p>
              </div>

              <div className='edu'>
                <p><Link to="/education">Education</Link></p>
              </div>

              <div className='project'>
                <p><Link to="/project">Project</Link></p>
              </div>
              <div className='contact'>
                <p><Link to="/contact">Contact</Link></p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default nav
