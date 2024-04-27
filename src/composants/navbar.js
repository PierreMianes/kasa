import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style-composants/navbar.scss'
import Kasa from '../images/kasa-desktop.svg'
import KasaMobile from '../images/kasa-mobile.svg'


function Navbar() {
  return (
    <nav>
        <img src={Kasa} className='kasa-desktop' alt="Logo Kasa"/>
        <img src={KasaMobile} className='kasa-mobile' alt="Logo Kasa"/>
      <ul>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/about">À propos</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
