import React from 'react'
import WireframeImage from '../../images/isave/main/wireframe-image.png'

const Wireframe = () => {
  return (
    <div className="isave-wireframe">
      <h4>Wireframe</h4>
      <div className="image-container flex">
        <img src={WireframeImage} alt="wireframe" />
        {/* <img src={HomeImg} alt="wireframe-img" />
        <img src={ProfileImg} alt="wireframe-img" />
        <img src={SavingsCardImg} alt="wireframe-img" />
        <img src={SavingsCardTwoImg} alt="wireframe-img" /> */}
      </div>
    </div>
  )
}

export default Wireframe