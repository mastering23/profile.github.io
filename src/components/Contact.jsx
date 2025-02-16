import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1>Contact</h1>
      <form className="contact" action="mailto:mastering23@gmail.com">
        <input type="text" placeholder='Firstname : ' />
        <input type="text" placeholder='Lastname : ' />
        <input type="text" placeholder='Email : ' />
        <textarea placeholder='Message : ' />
        <input type="submit"  value ="Send"/>
      </form>
      
     </div>
  )
}
