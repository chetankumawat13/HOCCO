import React from 'react'
import '../style/navbar.css'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src="/logo.svg" alt="" />
        </div>
        <div className='nav-links'>
            <NavLink className={({isActive}) => isActive ? "active" :""} to='/ourLegacy'>Our legacy</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" :""} to='/product'>our products</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" :""} to='/franchise'>franchise</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" :""} to='/joinTheClub'>join the club</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" :""} to='careers'>careers</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" :""} to='contact'>contact</NavLink>
        </div>
        <div className='r-nav'>
            <i class="ri-menu-line"></i>
        </div>
    </div>
  )
}

export default NavBar