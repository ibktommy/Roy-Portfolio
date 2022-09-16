import React from 'react'
import ShowCaseImage from '../../images/isave/main/ShowcaseImage.png'

const Header = () => {
  return (
    <>
      <header className="project-header">
        Isave focuses on managing users savings funds whilst providing an investment platform. I designed the Isave app and user experience.
      </header>

      <div className="header-details flex">
        <div className="header-details_left">
          <div className="header-details_right-role">
            <h4>Role</h4>
            <p>Product designer, User research, prototyping.</p>
          </div>
          <div className="header-details_right-duration">
            <h4>Duration</h4>
            <p>April 2021 - Sep 2021</p>
          </div>
        </div>

        <div className="header-details_right">
          <h4>Impact</h4>
            <ul>
              <li>
                <p>
                I was part of a 2-man design team that built high functional mobile  applications, that led to the over 50% increase in pofit margin for the entity.
                </p>
              </li>
              <li>
                <p>
                The admin panel interface increased the management evaluation and decision making process.
                </p>
              </li>
              <li>
                <p>
                High conversion rate for Isave.
                </p>
              </li>
            </ul>
        </div>
      </div>

      <div className="header-showcase flex">
        <img src={ShowCaseImage} alt="ShowcaseImage" />
      </div>
    </>
  )
}

export default Header