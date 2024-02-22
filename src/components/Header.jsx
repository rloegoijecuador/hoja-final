import React from 'react'
import '../styles/header.css'



const Header = () => {
  return (
    <header>
    <div className='logo'>
    <img src="../../public/itaresm-img.png" alt="" className='logo-img'/>
    <h3 className='logo-nombre'> igor benavides</h3>
    </div>
    <nav>
      <a href="#" className='nav-link'>home</a>
      <a href="#" className='nav-link'>skills</a>
      <a href="#" className='nav-link'>proyects</a>
      <a href="#" className='nav-link'>contact</a>
    </nav>
    
   </header>
  )
}

export default Header