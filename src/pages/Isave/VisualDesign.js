import React from 'react'
import VisualDesignCard from '../../components/VisualDesignCard'
import visualDesignData from './VisualDesignData.json'
import visualmageOne from '../../images/isave/main/Earn- flow1.png'
import visualmageTwo from '../../images/isave/main/Earn- flow2.png'
import visualmageThree from '../../images/isave/main/Earn- flow3.png'
import visualmageFour from '../../images/isave/main/successful.png'

const VisualDesign = () => {
  return (
    <div className="isave-visual">
      
      <h4>Visual Design</h4>

      {visualDesignData.map(({ id, ...props }) => {
        return <VisualDesignCard key={id} {...props}/>
      })}

      <div className="image-container flex">
        <img src={visualmageOne} alt="visual-img" />
        <img src={visualmageTwo} alt="visual-img" />
        <img src={visualmageThree} alt="visual-img" />
        <img src={visualmageFour} alt="visual-img" />
      </div>
      
    </div>
  )
}

export default VisualDesign