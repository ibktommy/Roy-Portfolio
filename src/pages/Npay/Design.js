import React from 'react'
import PersonaImgOne from '../../images/Npay/main/Persona.png'
import PersonaImgTwo from '../../images/Npay/main/Persona-1.png'

const Design = () => {
  return (
    <div className="npay-design">
      <h4>Design ideation</h4>
      <p><b>User persona</b></p>

      <div className="npay-design_persona flex">
        <div className="npay-design_persona-left">
          <img src={ PersonaImgOne } alt="pesona-1" />
        </div>
        <div className="npay-design_persona-right">
          <img src={ PersonaImgTwo } alt="persona-2" />
        </div>
      </div>
    </div>
  )
}

export default Design