import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Isave from './pages/Isave/Isave'
import Maclassics from './pages/Maclassics/Maclassics'
import Topmost from './pages/Topmost/Topmost'
import Npay from './pages/Npay/Npay'
import Exquite from './pages/Exquite/Exquite'
import Mace from './pages/Mace/Mace'

function App() {
  return (
    <div className="container">
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
