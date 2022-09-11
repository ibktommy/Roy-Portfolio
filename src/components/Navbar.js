import React from 'react'
import { Link } from 'react-router-dom'
import LogoDark from '../images/logo/AR-black.png'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to='/'>
          {/* <img src={LogoDark} alt="logo-dark" /> */}
        </Link>
      </div>

      <div className="links">
        <Link to='/contact'>Contact</Link>

        <div className="projects">
          <h4>Projects</h4>

          <div className="project-modal">
            <Link to='/topmost'>Topmost</Link>
            <Link to='/maclassics'>Maclassics</Link>
            <Link to='/isave'>Isave</Link>
            <Link to='/mace'>Mace</Link>
            <Link to='/npay'>N-Pay</Link>
            <Link to='/exquite'>Exquite Autos</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar