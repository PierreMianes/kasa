import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './composants/navbar';
import Footer from './composants/footer'


// Import des composants de page
import Home from './pages/Home';
import About from './pages/About';
import LocationInfo from './pages/LocationInfo';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location-info/:id" element={<LocationInfo />} />
          <Route path="*" element={<Error />} />
        </Routes> 
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
