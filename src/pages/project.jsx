import React from 'react'
import Projectcard from '../components/projectcard'
const project = () => {
  return (
    <div className='container'>
      <br />
      <br />
      <h1>Featured Projects</h1>
      <div className='project' >
        <div><a href='https://avinash-jha-ai.github.io/cruncyroll-clone/'><Projectcard name='cruncyroll-clone' u1='HTML' u2='CSS' u3='JS' content='A Crunchyroll clone (frontend) focuses on delivering a clean, fast, and engaging user interface for browsing and watching anime content. It typically includes a responsive layout, anime cards with posters and ratings, genre-based sections, search functionality, and smooth navigation between episodes and series pages.' /></a></div>
        <div><a href='https://avinash-jha-ai.github.io/dsa-practice-site/'><Projectcard name='dsa-practice-site' u1='HTML' u2='CSS' u3='JS'  content='A DSA practice site (frontend) is designed to provide a structured and intuitive interface for learning and solving data structures and algorithms problems. It typically includes problem listings with difficulty filters, topic-wise categorization, detailed problem pages, and a clean code editor layout.' /></a></div>
      </div>
    </div>
  )
}

export default project
