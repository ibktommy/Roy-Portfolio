import React from 'react'
import { Link } from 'react-router-dom'
import LogoDark from '../images/logo/AR-black.png'

const Navbar = ({ themeToggleProp }) => {
  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          <img src={LogoDark} alt="logo-dark" />
        </Link>
      </div>

      <div className="links">
        <Link to='/contact' className='contact-page'>Contact</Link>

        <div className="projects">
          <span>Projects</span>

          <div className="project-modal hidden">
            <Link to='/topmost' className='pages-link'>Topmost</Link>
            <Link to='/maclassics' className='pages-link'>Maclassics</Link>
            <Link to='/isave' className='pages-link'>Isave</Link>
            <Link to='/mace' className='pages-link'>Mace</Link>
            <Link to='/npay' className='pages-link'>N-Pay</Link>
            <Link to='/exquite' className='pages-link'>Exquite Autos</Link>
          </div>
        </div>
        <button className="toggle-btn flex" onClick={themeToggleProp}>
          <i className='fas fa-moon'></i>
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar