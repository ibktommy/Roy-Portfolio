import React from 'react'
import userFlowImgOne from '../../images/Npay/main/userflow-1.png'
import userFlowImgTwo from '../../images/Npay/main/userflow-2.png'
import userFlowImgThree from '../../images/Npay/main/userflow-3.png'
import userFlowImgFour from '../../images/Npay/main/userflow-4.png'
import userFlowImgFive from '../../images/Npay/main/userflow-5.png'

const UserFlow = () => {
  return (
    <div className="npay-userflow">
      <h4>User flow maps</h4>
      <div className="exquite-userflow_img row-flex">
        <img src={userFlowImgOne} alt="userflow" />
        <img src={userFlowImgTwo} alt="userflow" />
        <img src={userFlowImgThree} alt="userflow" />
        <img src={userFlowImgFour} alt="userflow" />
        <img src={userFlowImgFive} alt="userflow" />
      </div>
    </div>
  )
}

export default UserFlow