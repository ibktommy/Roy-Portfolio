import React from 'react'
import componentsImage from '../../images/isave/main/components.png'

const FileComponents = () => {
  return (
    <div className="isave-components">
      <h4>components</h4>
      <div className="image-container flex">
        <img src={componentsImage} alt="components" />
      </div>
    </div>
  )
}

export default FileComponents