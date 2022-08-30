import React from 'react'
import VisualDesignCard from '../../components/VisualDesignCard'
import exquiteData from './VisualDesignData.json'

const VisualDesign = () => {
  return (
    <div className="exquite-visual">
      <h4>Visual design</h4>
      {
        exquiteData.map(({ id, ...props }) => {
          return <VisualDesignCard key={id} {...props} />
        })
      }
    </div>
  )
}

export default VisualDesign