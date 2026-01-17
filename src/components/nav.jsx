import React from 'react'

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
                <p ><a href='/'>Home</a></p>
              </div>
              <div className='skill'>
                <p><a href='/skill'>Skill</a></p>
              </div>

              <div className='edu'>
                <p><a href='/education'>Education</a></p>
              </div>

              <div className='project'>
                <p><a href='/project'>Project</a></p>
              </div>
              <div className='contact'>
                <p><a href='/contact'>Contact us</a></p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default nav
