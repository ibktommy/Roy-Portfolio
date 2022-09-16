import React from 'react'
import WireframeImage from '../../images/Npay/main/wireframe.png'

const Wireframe = () => {
  return (
    <div className="npay-wireframe">
      <h4>Wireframe</h4>
      <div className="image-container flex">
        <img src={WireframeImage} alt="wireframe-img" />
      </div>
    </div>
  )
}

export default Wireframe