import React from 'react'

const projectcard = (props) => {
  return (
    <div>
        <div className='procard'>
            <div className='proname'><h1><span>{props.name}</span></h1></div>
            <div className='conx'><p>{props.content}</p></div>
            <div className='use'>
                <div id='us'><p>{props.u1}</p></div>
                <div id='us'><p>{props.u2}</p></div>
                <div id='us'><p>{props.u3}</p></div>
            </div>
        </div>
    </div>
  )
}

export default projectcard
