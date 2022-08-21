import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Isave from './pages/Isave/Isave'
import Maclassics from './pages/Maclassics/Maclassics'
import Topmost from './pages/Topmost/Topmost'
import Npay from './pages/Npay/Npay'
import RentACar from './pages/RentAcar/RentACar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/isave' element={<Isave />} />
        <Route path='/maclassics' element={<Maclassics />} />
        <Route path='/npay' element={<Npay />} />
        <Route path='/rent-a-car' element={<RentACar />} />
        <Route path='/topmost' element={<Topmost />} />
      </Routes>
    </Router>
  );
}

export default App;
