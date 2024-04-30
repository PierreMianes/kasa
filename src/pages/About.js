import React from 'react';
import PaysageBandeau from '../images/paysage.png'
import Deroulant from '../composants/deroulant'
import '../styles/style-pages/About.scss'

function About() {
  return (
    <div className='about'>
      <div className='Bandeau'>
        <div className='overlay'></div>
        <img src={PaysageBandeau} alt='Plage' />
      </div>
      <div className="about-deroulant">
        <Deroulant titre="Fiabilité" contenu={
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        }>
        </Deroulant>

        <Deroulant titre="Respect" contenu={
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        }>
        </Deroulant>

        <Deroulant titre="Service" contenu={
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        }>
        </Deroulant>

        <Deroulant titre="Sécurité" contenu={
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        }>
        </Deroulant>
      </div>
    </div>
  );
}

export default About;
