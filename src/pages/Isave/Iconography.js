import React from 'react'
import iconsImage from '../../images/isave/main/Iconography.png'

const Iconography = () => {
  return (
    <div className="isave-icons">
      <h4>Iconography</h4>
      <div className="isave-icons_image flex">
        <img src={iconsImage} alt="icons" />
      </div>
    </div>
  )
}

export default Iconography