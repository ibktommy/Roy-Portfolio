import React from 'react'
import VisualDesignCard from '../../components/VisualDesignCard'
import VisualHomeImage from '../../images/mace/main/main-home.png'
import maceData from './VisualDesignData.json'

const VisualDesign = () => {
  return (
    <div className="mace-visual">
      <h4>Visual design</h4>
      <div className="mace-visual_image flex">
        <img src={VisualHomeImage} alt="visualMainImage" />
      </div>
      {
        maceData.map(({ id, ...props }) => {
          return <VisualDesignCard key={id} {...props} />
        })
      }
    </div>
  )
}

export default VisualDesign