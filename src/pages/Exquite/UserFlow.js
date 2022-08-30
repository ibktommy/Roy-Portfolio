import React from 'react'
import userFlowImgOne from '../../images/exqui/main/Group 26987.png'
import userFlowImgTwo from '../../images/exqui/main/BookProduct.png'
import userFlowImgThree from '../../images/exqui/main/findProduct.png'

const UserFlow = () => {
  return (
    <div className="exquite-userflow">
      <div className="exquite-userflow_img row-flex">
        <img src={userFlowImgOne} alt="userflow" />
        <img src={userFlowImgTwo} alt="userflow" />
        <img src={userFlowImgThree} alt="userflow" />
      </div>
    </div>
  )
}

export default UserFlow