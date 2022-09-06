import React from 'react'
import WireframeHomeImg from '../../images/Npay/main/HomeWireframe.png'
import WireframeCardImg from '../../images/Npay/main/CardsWireframe.png'
import WireframeHistoryImg from '../../images/Npay/main/HistoryWireframe.png'
import WireframeProfileImg from '../../images/Npay/main/ProfileWireframe.png'

const Wireframe = () => {
  return (
    <div className="npay-wireframe">
      <h4>Wireframe</h4>
      <div className="image-container">
        <img src={WireframeHomeImg} alt="wireframe-img" />
        <img src={WireframeCardImg} alt="wireframe-img" />
        <img src={WireframeHistoryImg} alt="wireframe-img" />
        <img src={WireframeProfileImg} alt="wireframe-img" />
      </div>
    </div>
  )
}

export default Wireframe