import React from 'react'
import NavLink from './NavLink'
import './Nav.css'
const Nav = () => {
    return (
        <div className='topnav'  id="header">
            <nav role="navigation" id="nav-main" >
                {NavLink.map(index => (
                 <a href={index.href}> {index.name}</a>
                ))}
          
            </nav>
        </div>
    )
}

export default Nav
