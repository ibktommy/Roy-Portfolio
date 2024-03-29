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

      if (window.scrollY >= 22) {
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

  // Function to Make Modal Hidden
  const hideModal = () => {
    setModal(!modal)
    window.scrollTo({
      top: 0,
    })
  }

  // Function to remove Modal whenever any part of the document is clicked
  const removeModal = (e) => {
    if (e.target.parentElement.classList[0] !== 'projects') {
      setModal(false)
    }
    return
  }
  useEffect(() => {
    document.body.addEventListener('click', removeModal)
    return () => window.removeEventListener('click', removeModal)
  })


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
              !modal ? (
                <i className="fas fa-chevron-down"></i>
              ) : (
                <i className="fas fa-chevron-up"></i>
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

      <div className={!modal ? 'modal slide' : 'modal'} >
        <ul>
          <li className='row-flex'>
            {HomeData.map(({ id, title, link }) => (
              <Link to={`/${link}`} key={id} onClick={hideModal}>{title}</Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar