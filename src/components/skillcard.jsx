import React from 'react'

const skillcard = (props) => {
  return (
    <div className='skillcard'>
        <div><h1><span>{props.name}</span></h1></div>
        <div>
            <ul>
                <h3>{props.heading1}</h3>
                <br />
                <h3>{props.heading2}</h3>
                <br />
                <h3>{props.heading3}</h3>
                <br />
            </ul>
        </div>
    </div>
  )
}

export default skillcard
