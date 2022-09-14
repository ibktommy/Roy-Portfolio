import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeData from '../pages/Home/HomeData.json'
import LogoDark from '../images/logo/AR-blue.png'
import LogoWhite from '../images/logo/AR-white.png'

const Navbar = ({ themeToggleProp, theme }) => {
  // Navbar State
  const [modal, setModal] = useState(false)
  const [navShadow, setNavShadow] = useState(false)

  // Function that monitors state of Modal
  const modalToggleHandler = () => {
    setModal(!modal)
  }
  // Scroll Event Function
  const scrollEvent = () => {
    window.addEventListener('scroll', (e) => {

      if (window.scrollY >= 20) {
        setNavShadow(true)
      } else {
        setNavShadow(false)
      }
    })
  }

  // Calling the Scroll Event Using the UseEffect Hook After Render
  useEffect(() => {
    scrollEvent()
    return () => window.removeEventListener('scroll', scrollEvent)
  }, [])


  return (
    <>
      <nav className={navShadow ? 'shadow' : null}>
        <Link to='/' className='logo'>
          {
            theme === 'light-theme' ? (
              <img src={LogoDark} alt="logo" />
            ) : (
              <img src={LogoWhite} alt="logo" />
            )
          }
        </Link>

        <div className="links">
          <Link to='/contact' className='contact'>
            <span>Contact</span>
          </Link>

          <div className="projects" onClick={modalToggleHandler}>
            <span>Projects</span>
            {
              modal ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
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

      <div className={modal ? 'modal slide' : 'modal'} >
        <ul>
          <li className='row-flex'>
            {HomeData.map(({ id, title, link }) => (
              <Link to={`/${link}`} key={id}>{title}</Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar