import React, { useState } from 'react'
import '../styles/style-composants/deroulant.scss'
import fleche from '../images/fleche.svg'

const Deroulant = ({ titre, contenu}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDeroulant = () => setIsOpen(!isOpen)

  return (
    <div className="Deroulant">
      <button className="titre-deroulant" onClick={toggleDeroulant}>
        {titre}
        <img 
          src={fleche} 
          className={`fleche ${isOpen ? 'open' : ''}`} 
          alt="flèche deroulant"
        />
      </button>
      {isOpen && 
        <div className="contenu-deroulant">{contenu}</div>
      }
    </div>
  )
}

export default Deroulant