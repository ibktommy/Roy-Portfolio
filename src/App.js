import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Isave from './pages/Isave/Isave'
import Maclassics from './pages/Maclassics/Maclassics'
import Topmost from './pages/Topmost/Topmost'
import Npay from './pages/Npay/Npay'
import Exquite from './pages/Exquite/Exquite'
import Mace from './pages/Mace/Mace'
import Navbar from './components/Navbar';
import ScrollUp from './components/ScrollUp';
import Contact from './pages/Contact/Contact';


// Function to Set Theme in LocalStorage
function localStorageTheme() {
  let theme = 'light-theme'

  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }

  return theme
}

function App() {
  // Setting App State
  const [theme, setTheme] = useState(localStorageTheme())
  const [pageBottom, setPageBottom] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function themeHandler() {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  // Scroll Event Function
  const scrollEvent = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 30) {
      setPageBottom(true)
    } else {
      setPageBottom(false)
    }
    return
  }

  // Setting up useEffect-Hook to run the scroll-event-functionality
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)
    return () => window.removeEventListener('scroll', scrollEvent)
  }, [])

  // Function that gets called when one  reloads the webapp
  const windowReloaded = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('load', windowReloaded)
  }, [window.onload])

  return (
    <>
    <Navbar themeToggleProp={themeHandler} theme={theme} />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/isave' element={<Isave />} />
        <Route path='/maclassics' element={<Maclassics />} />
        <Route path='/mace' element={<Mace />} />
        <Route path='/npay' element={<Npay />} />
        <Route path='/exquite' element={<Exquite />} />
        <Route path='/topmost' element={<Topmost />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
      {
        pageBottom && <ScrollUp />
      }
    </>
  );
}

export default App;
