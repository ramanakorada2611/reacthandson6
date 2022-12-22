import React from 'react'
import { NavLink } from 'react-router-dom'
export const AppNavbar = () => {
  return (
    <>
      <header>
        <NavLink to='/'  className="headerlink">Home</NavLink>
        <NavLink to='/Student' className="headerlink" >Student</NavLink>
        <NavLink to='/ContactUs' className="headerlink">ContactUs</NavLink>
      </header>
    </>
  )
}

