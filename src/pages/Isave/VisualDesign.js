import React from 'react'
import VisualDesignCard from '../../components/VisualDesignCard'
import visualDesignData from './VisualDesignData.json'
import InvestSelection from '../../images/isave/main/investSection.png'

const VisualDesign = () => {
  return (
    <div className="isave-visual">
      
      <h4>Visual Design</h4>

      {visualDesignData.map(({ id, ...props }) => {
        return <VisualDesignCard key={id} {...props}/>
      })}

      <div className="image-container flex">
        <img src={InvestSelection} alt="invest-selection" />
      </div>
      
    </div>
  )
}

export default VisualDesign