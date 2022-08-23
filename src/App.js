import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Isave from './pages/Isave/Isave'
import Maclassics from './pages/Maclassics/Maclassics'
import Topmost from './pages/Topmost/Topmost'
import Npay from './pages/Npay/Npay'
import Exquite from './pages/Exquite/Exquite'
import Mace from './pages/Mace/Mace'

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

  return (
    <div className="container">
      <button className="toggle-btn" onClick={themeHandler}>Dark Mode</button>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/isave' element={<Isave />} />
          <Route path='/maclassics' element={<Maclassics />} />
          <Route path='/mace' element={<Mace />} />
          <Route path='/npay' element={<Npay />} />
          <Route path='/exquite' element={<Exquite />} />
          <Route path='/topmost' element={<Topmost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
