import React from 'react'
import designImgLeft from '../../images/mace/main/Group 27059.png'
import designImgRight from '../../images/mace/main/button.png'
import designImgRightTwo from '../../images/mace/main/button-1.png'
import designImgRightThree from '../../images/mace/main/Group 93.png'

const DesignSystem = () => {
  return (
    <div className="mace-design">
      <h4>Design System</h4>
      <p>
        For reuseablity, easy design and development I designed simple style guides.
      </p>

      <div className="image-container flex">
        <div className="left">
          <img src={designImgLeft} alt="design-img" />
        </div>
        <div className="right flex">
          <img src={designImgRight} alt="design-img" />
          <img src={designImgRightTwo} alt="design-img" />
          <img src={designImgRightThree} alt="design-img" />
        </div>
      </div>
    </div>
  )
}

export default DesignSystem