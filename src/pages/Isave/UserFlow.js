import React from 'react'
import userFlowImg from '../../images/isave/main/userflow.png'

const UserFlow = () => {
  return (
    <div className="isave-userflow">
      <h4>User Flow Journey</h4>
      <p>
        I created the flow of use that will be experienced by users of the Isave app. The user flow is a form of site map that shows all important screens which will appear on the app, by which decision taken on those screens decide the objective the user wants to achieve.
      </p>
      <div className="isave-userflow_img flex">
        <img src={userFlowImg} alt="userflow" />
      </div>
    </div>
  )
}

export default UserFlow