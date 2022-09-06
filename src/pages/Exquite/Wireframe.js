import React from 'react'
import WireframeHomeImg from '../../images/exqui/main/Home-1.png'
import WireframeBrandImg from '../../images/exqui/main/brandPage.png'
import WireframeRentalsImg from '../../images/exqui/main/rentals.png'

const Wireframe = () => {
  return (
    <div className="exquite-wireframe">
      <h4>Wireframe</h4>
      <div className="image-container">
        <img src={WireframeHomeImg} alt="wireframe-img" />
        <img src={WireframeBrandImg} alt="wireframe-img" />
        <img src={WireframeRentalsImg} alt="wireframe-img" />
      </div>
    </div>
  )
}

export default Wireframe