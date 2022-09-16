import React from 'react'
import WireframeImage from '../../images/mace/main/wireframe.png'

const Wireframe = () => {
  return (
    <div className="mace-wireframe">
      <h4>Wireframe</h4>
      <p>I created wireframes to test the user flows and check possibilities of implementing design UI created in the sketches.</p>
      <div className="image-container flex">
        <img src={WireframeImage} alt="wireframe" />
      </div>
    </div>
  )
}

export default Wireframe