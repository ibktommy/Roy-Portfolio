import React from 'react'
import DesignImage from '../../images/topmost/main/checkout-1.png'

const DesignSystem = () => {
  return (
    <div className="topmost-design">
      <h4>components</h4>
      <p>
        A number of components were created to ease the use and reuse of identifiable patterns both during the design process and also for our users to easily recognize the functions of the various UI in the website. These design systems also provided to the developers clear patterns of how to produce the project.
      </p>
      <div className="image-container flex">
        <img src={DesignImage} alt="components" />
      </div>
    </div>
  )
}

export default DesignSystem