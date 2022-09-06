import React from 'react'
import VisualDesignCard from '../../components/VisualDesignCard'
import npayData from './VisualDesignData.json'

const VisualDesign = () => {
  return (
    <div className="npay-visual">
      <h4>Visual design</h4>
      {
        npayData.map(({ id, ...props }) => {
          return <VisualDesignCard key={id} {...props} />
        })
      }
    </div>
  )
}

export default VisualDesign