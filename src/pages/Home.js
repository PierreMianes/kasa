import React from 'react';
import '../styles/style-pages/Home.scss'
import PlageBandeau from '../images/plage.png'
import LocationLink from '../composants/location-link'
import properties from '../data/data.json'

function Home() {
  return (
    <div className='home'>
      <div className='Bandeau'>
        <div className='overlay'></div>
        <img src={PlageBandeau} alt='Plage' />
        <p>Chez vous, partout ailleurs</p>
      </div>
      <div className='locations'>
        {properties.map((location) => (
          <LocationLink key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}

export default Home