import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeData from '../pages/Home/HomeData.json'
import LogoDark from '../images/logo/AR-blue.png'
import LogoWhite from '../images/logo/AR-white.png'

const Navbar = ({ themeToggleProp, theme }) => {
  // Navbar State
  const [modal, setModal] = useState(false)

  // Function that monitors state of Modal
  const modalToggleHandler = () => {
    setModal(!modal)
  }

  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          {
            theme === 'light-theme' ? (
              <div className="logo">
                <img src="" alt="logo" className='logo-image' />
              </div>
            ) : (
              <div className="logo">
                <img src="" alt="logo" className='logo-image' />
              </div>
            )
          }
        </Link>
      </div>

      <div className="links">
        <Link to='/contact'>
          <span className='contact-page'>Contact</span>
        </Link>

        <div className="projects" onClick={modalToggleHandler}>
          <span>Projects</span>
          {
            modal ? (
              <i className="fas fa chevron-up"></i>
            ) : (
              <i className="fas fa chevron-down"></i>
            )
          }
        </div>

        <button className="toggle-btn flex" onClick={themeToggleProp}>
          {
            theme === 'light-theme' ? (
              <div className="theme">
                <i className='fas fa-moon'></i>
                <span>Dark Mode</span>
              </div>
            ) : (
              <div className="theme">
                <i className='fas fa-sun'></i>
                <span>Light Mode</span>
              </div>
            )
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar