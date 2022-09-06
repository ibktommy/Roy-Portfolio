import React from 'react'
import ColorImg from '../../images/Npay/main/color.png'

const Color = () => {
  return (
    <div className="npay-color row-flex">
      <h4>Color palette</h4>
      <p>
        Chosen color for the app is green, its the color of choice to display the affiliation of the app to the government of Nigeria which uses green and white as its national colors.
      </p>
      <div className="npay-color_box">
        <img src={ColorImg} alt="color-box" />
      </div>
    </div>
  )
}

export default Color