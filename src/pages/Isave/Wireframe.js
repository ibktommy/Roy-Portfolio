import React from 'react'
import HomeImg from '../../images/isave/main/Home.png'
import ProfileImg from '../../images/isave/main/PROFILE.png'
import SavingsCardImg from '../../images/isave/main/Savings card.png'
import SavingsCardTwoImg from '../../images/isave/main/13 Pro - 1 1.png'

const Wireframe = () => {
  return (
    <div className="isave-wireframe">
      <h4>Wireframe</h4>
      <div className="image-container flex">
        <img src={HomeImg} alt="wireframe-img" />
        <img src={ProfileImg} alt="wireframe-img" />
        <img src={SavingsCardImg} alt="wireframe-img" />
        <img src={SavingsCardTwoImg} alt="wireframe-img" />
      </div>
    </div>
  )
}

export default Wireframe