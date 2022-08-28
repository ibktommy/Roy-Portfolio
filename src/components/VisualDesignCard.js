import React from 'react'

const VisualDesignCard = ({ heading, text, image }) => {
  // Destructure values from "text-object"
  // console.log(text)

  return (
    <div className="isave-visual_card">
      <h5>{heading}</h5>

      {text.map((textItem, index) => {
        const { textOne, textTwo, textThree, textFour } = textItem

        return (
          <div className='isave-visual_card-texts' key={index}>
            <p dangerouslySetInnerHTML={{ __html: textOne }}></p>
            {textTwo && <p dangerouslySetInnerHTML={{ __html: textTwo }}></p>}
            {textThree && <p dangerouslySetInnerHTML={{ __html: textThree }}></p>}
            {textFour && <p dangerouslySetInnerHTML={{ __html: textFour }}></p>}
          </div>
        )
      })}

      {(image !== null) && image.map((imageItem, index) => {
        const { imageOne, imageTwo, imageThree } = imageItem

        return (
          <div className="isave-visual_card-img flex" key={index}>
            <img src={imageOne} alt="visual_image" />
            {imageTwo && <img src={imageTwo} alt="visual_image" />}
            {imageThree && <img src={imageThree} alt="visual_image" />}
          </div>
        )
      })}
    </div>
  )
}

export default VisualDesignCard