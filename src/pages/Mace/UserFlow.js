import React from 'react'
import userFlowImg from '../../images/mace/main/Useflows.png'

const UserFlow = () => {
  return (
    <div className="mace-userflow">
      <h4>User Flow Journey</h4>
      <p>
        User flow map of the Mace app was designed with a flat sitemap system, the process is kept simple for easy use and better experience 
      </p>
      <div className="mace-userflow_img flex">
        <img src={userFlowImg} alt="userflow" />
      </div>
    </div>
  )
}

export default UserFlow