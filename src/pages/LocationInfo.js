import React from 'react';
import '../styles/style-pages/LocationInfo.scss'
import { useParams } from 'react-router-dom'
import Deroulant from "../composants/deroulant"
import location from '../data/data.json'
import Carrousel from '../composants/carrousel'
import etoilePleine from '../images/etoilePleine.svg'
import etoileVide from '../images/etoileVide.svg'
import Error from '../pages/Error'



const LocationInfo = () => {
  let { id } = useParams()
  let property = location.find(p => p.id === id)

  if (!property) {
    return <Error />;
  }

  const generateRating = (rating) => {
    const NombreTotalEtoiles = 5
    let etoiles = []
    for (let i = 0; i < NombreTotalEtoiles; i++) {
      etoiles.push(
        i < rating ? <img key={i} src={etoilePleine} alt="Etoile pleine" /> : <img key={i} src={etoileVide} alt="Etoile vide" />
      )
    }
    return etoiles
  }

  return (
    <div className='location-info'>
      <Carrousel photos={property.pictures} />
      <div className='info'>
          <div className='info-gauche'>
            <h1>{property.title}</h1>
            <h2>{property.location}</h2>
            <div className='location-tags'>
              {property.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
            </div>
          </div>
            <div className='info-droite'>
              <div className='info-proprio'>
                <div className="proprio-nom">{property.host.name}</div>
                <img src={property.host.picture} className="Photo-proprio" alt={`Proprio : ${property.host.name}`}  />
              </div>
                <div className='note-location'>
                {generateRating(Number(property.rating))}
                </div>
            </div>
        </div>
            <div className='deroulants-info'>
              <Deroulant titre="Description" className="deroulant-description" contenu={
              <p>{property.description}</p>}>
              </Deroulant>
              <Deroulant titre="Équipements" className="deroulant-equipement" contenu={
              <ul>
                {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
              </ul>
              }>
              </Deroulant>
            </div>
      </div>
  )
}

export default LocationInfo