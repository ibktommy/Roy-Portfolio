import React from 'react'
import WireFrameImage from '../../images/exqui/main/wireframe.png'

const Wireframe = () => {
  return (
    <div className="exquite-wireframe">
      <h4>Wireframe</h4>
      <div className="image-container flex">
        <img src={WireFrameImage} alt="wireframe-img" />
      </div>
    </div>
  )
}

export default Wireframe