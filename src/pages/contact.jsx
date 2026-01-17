import React from 'react'

const contact = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className='con'>
        <div className='contactcontent'>
          <h1>Let's <span>Connect</span></h1>
          
          <div><p>I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p></div>
          <div className='mail'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <h2>avinashjha@gmail.com</h2>
          </div>
          <div className='phone'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
            <h2>9988XXXXXX</h2>
          </div>
        </div>
        <div className='conform'>
            <div><input type='text' placeholder='Name' id='name' /></div>
            <input id='email' type='email' placeholder='Email' />
            <textarea placeholder='Your Message' id='text' />
            <button >Send Message</button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default contact
