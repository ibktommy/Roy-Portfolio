import React from 'react'
import VisualDesignCard from '../../components/VisualDesignCard'
import visualDesignData from './VisualDesignData.json'

const VisualDesign = () => {
  return (
    <div className="isave-visual">
      
      <h4>Visual Design</h4>
      {visualDesignData.map(({ id, ...props }) => {
        return <VisualDesignCard key={id} {...props}/>
      })}
      
    </div>
  )
}

export default VisualDesign