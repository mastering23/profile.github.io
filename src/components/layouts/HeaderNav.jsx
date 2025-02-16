import React from 'react'
import {NavLink} from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className="logo">
      <span>E</span>
      <h3>Engel Noel B.N.</h3>
      </div>
      <nav>
      <ul>
        <li><NavLink to='/index'className={({isActive}) => isActive ? "active" : " " }>Home</NavLink></li>
        <li><NavLink to='/profile'className={({isActive}) => isActive ? "active" : " " }>Profile</NavLink></li>
        <li><NavLink to='/services'className={({isActive}) => isActive ? "active" : " " }>Services</NavLink></li>
        <li><NavLink to='/resume'className={({isActive}) => isActive ? "active" : " " }>Resume</NavLink></li>
        <li><NavLink to='/contact'className={({isActive}) => isActive ? "active" : " " }>Contact</NavLink></li>
      </ul>
      </nav>
     

    </header>
  )
}
