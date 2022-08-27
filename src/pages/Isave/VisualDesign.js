import React from 'react'
import VisualImageOne from '../../images/isave/main/project image home 1.png'

const VisualDesign = () => {
  return (
    <div className="isave-visual">
      
      <h4>Visual Design</h4>

      <div className="isave-visual_content-one">
        <h5>
          A first glance infromation display is important for users so, we designed the total savings balance and other CTA’s to be visible on the homepage.
        </h5>
        <p>
          The total amount of money the user has inside the Isave network including any possible interests can be seen to provide quick information to users on their funds.
          <br />
          Other Call To Actions like the ‘Deposit Funds’, ‘Create Savings’, and ‘Lock Funds’ are the primary and secondary buttons which is easliy accessible to our users. It provides the user with quick decision implementation which to a great extent improves the user experience.
        </p>
      </div>

      <div className="isave-visual_content-two">
        <h5>
          Monitoring savings plan is important to users so we designed as part of the UI on the home to supports the display of user selected savings plan.
        </h5>
        <p>
          Two of the users savings plan can be featured on the home screen to provide close monitoring for them. The title, current amount and targets can be seen on the card’s UI display. Again in an effort to provide good experience for Isave app users.
          This UI feature enables the users to select their favourite savings plan to appear on the home screen. It can be edited at any time.
        </p>

        <img src={VisualImageOne} alt="visual-design-img" />
      </div>

      
    </div>
  )
}

export default VisualDesign