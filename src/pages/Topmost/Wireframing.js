import React from 'react'
import Wireframe from '../../images/topmost/main/wireframe.png'

const Wireframing = () => {
  return (
    <div className="topmost-wireframe">
      <h4>
        Wireframing
      </h4>
      <p>
        I designed a well detailed wireframe screens to show the user flows in a design manner and enable testing and evaluation of the processes involved to ensure the production of a problem sloving, goal achieveing high fidelity design.
      </p>

      <div className="topmost-wireframe-img flex">
        <img src={Wireframe} alt='wireframe' />
      </div>
    </div>
  )
}

export default Wireframing