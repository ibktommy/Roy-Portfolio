import React from 'react'

const VisualDesignCard = ({ heading, text, image }) => {

  return (
    <div className="isave-visual_card">
      {heading && <h5>{heading}</h5>}

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
        const { imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = imageItem

        return (
          <div className="isave-visual_card-img flex" key={index}>
            <img src={imageOne} alt="visual_image" />
            {imageTwo && <img src={imageTwo} alt="visual_image" />}
            {imageThree && <img src={imageThree} alt="visual_image" />}
            {imageFour && <img src={imageFour} alt="visual_image" />}
            {imageFive && <img src={imageFive} alt="visual_image" />}
            {imageSix && <img src={imageSix} alt="visual_image" />}
            {imageSeven && <img src={imageSeven} alt="visual_image" />}
            {imageEight && <img src={imageSeven} alt="visual_image" />}
          </div>
        )
      })}
    </div>
  )
}

export default VisualDesignCard