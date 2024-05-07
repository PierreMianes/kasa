import React, { useState, useEffect } from 'react'
import PreviousFleche from '../images/previousfleche.svg'
import NextFleche from '../images/nextfleche.svg'
import '../styles/style-composants/carrousel.scss'

const Carrousel = ({ photos }) => {
  const [IndexImage, setIndexImage] = useState(0)
  const imageList = photos.length
  const [SlideImage, setSlideImage] = useState(0)

  useEffect(() => {
    setSlideImage(-IndexImage * 100)
  }, [IndexImage])

  const imagePrecedente = () => {
    if (IndexImage === 0) {
      setIndexImage(imageList - 1)
    } else {
      setIndexImage(IndexImage - 1)
    }
  }

  const imageSuivante = () => {
    if (IndexImage === imageList - 1) {
      setIndexImage(0)
    } else {
      setIndexImage(IndexImage + 1)
    }
  }

  return (
    <div className="carrousel">
      <div className="carrousel-diapo">
        <div 
          className="carrousel-images"
          style={{ transform: `translateX(${SlideImage}%)` }}
        >
          {photos.map((photo, Index) => (
            <img key={Index} src={photo} alt={`Property ${Index}`} className="carrousel-image" />
          ))}
        </div>
        {imageList > 1 && (
          <>
            <div className="carrousel-nombre">
              {`${IndexImage + 1}/${imageList}`}
            </div>
            <div className="carrousel-fleche">
              <img src={PreviousFleche} className="left-arrow" onClick={imagePrecedente} alt="Previous" />
              <img src={NextFleche} className="right-arrow" onClick={imageSuivante} alt="Next" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carrousel