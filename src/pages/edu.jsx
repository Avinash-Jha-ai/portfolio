import React from 'react'
import Educard from '../components/educard'
const edu = () => {
  return (
    <div className='educa'>
      <br />
      <div ><h1>My <span>Education</span> Journey</h1></div>
      <br />
      
      <Educard school='S.D. Model School' class='tenth' marks='86' year='2021-2022' />
      <Educard school='S.D. Model School' class='Twelve' marks='86' year='2023-2024' />
      <Educard school='National Institute of Technology, Jalandhar' class='semester-1' marks='8' year='2025-current' />
      <br />
    </div>
  )
}

export default edu
