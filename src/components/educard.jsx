import React from 'react'

const educard = (props) => {
  return (
    <div>
      
      <div className='tenth'>
          <div>
            <h1><span>{props.school} </span></h1>
            <p>class : {props.class}</p>
            <p>Percentage : {props.marks}%</p>
          </div>
          <div className='year'> 
            {props.year}
          </div>
      </div>
    </div>
  )
}

export default educard
