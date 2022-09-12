import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
          {theme === 'light-theme' ? <img src={LogoDark} alt="logo-dark" /> : <img src={LogoWhite} alt="logo-white" />}
        </Link>
      </div>

      <div className="links">
        <Link to='/contact'>
          <span className='contact-page'>Contact</span>
        </Link>

        <div className="projects" onClick={modalToggleHandler}>
          <span>Projects</span>
          {!modal ? <i className='fas fa-chevron-down  modal-arrow'></i> : <i className='fas fa-chevron-up modal-arrow'></i>}

          {modal ? (
            <div className="projects-modal row-flex">
              <Link to='/topmost' className='pages-link'>Topmost</Link>
              <Link to='/maclassics' className='pages-link'>Maclassics</Link>
              <Link to='/isave' className='pages-link'>Isave</Link>
              <Link to='/mace' className='pages-link'>Mace</Link>
              <Link to='/npay' className='pages-link'>N-Pay</Link>
              <Link to='/exquite' className='pages-link'>Exquite Autos</Link>
            </div>
          ) : null}
        </div>
        
        <button className="toggle-btn flex" onClick={themeToggleProp}>
          {theme === 'light-theme' ? <i className='fas fa-moon'></i> : <i className='fas fa-sun'></i>}
          {theme === 'dark-theme' ? <span>Dark Mode</span> : <span>Light Mode</span>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar