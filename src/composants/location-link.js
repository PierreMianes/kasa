import React from 'react'
import '../styles/style-composants/location-link.scss'
import { Link } from 'react-router-dom'

const LocationLink = ({ location }) => {
    return (
        <Link to={`/location-info/${location.id}`} className="location-link">
            <img src={location.cover} alt={`Aperçu de ${location.title}`} />
            <h3>{location.title}</h3>
        </Link>
    )
}

export default LocationLink