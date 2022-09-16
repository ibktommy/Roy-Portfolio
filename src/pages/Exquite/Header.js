import React from 'react'
import ShowCaseImage from '../../images/exqui/main/showcase.png'

const Header = () => {
  return (
    <>
      <header className="project-header">
        Exquite Autos offers a wide range of vehicles for lease services to it’s customers. I designed the mobile application UI and tone of user experience.
      </header>

      <div className="header-details flex">
        <div className="header-details_left">
          <div className="header-details_right-role">
            <h4>My Role</h4>
            <p>
              UI/UX designer.
            </p>
          </div>
          <div className="header-details_right-duration">
            <h4>Duration</h4>
            <p>May 2019- Sep 2019</p>
          </div>
        </div>

        <div className="header-details_right">
          <h4>Result</h4>
          <ul>
            <li>
              <p>
                The app has had a signifcant amount of downloads from the company’s website.
              </p>
            </li>
            <li>
              <p>
                Simplicity of the design system coupled with usage of similar patterns assisted the production team in developing the app in the time frame less than what was planned initially.
              </p>
            </li>
            <li>
              <p>
                The company has recorded over 80% increase in bookings request since the application has been released.
              </p>
            </li>
            <li>
              <p>
                Plan of the business to adopt the use of mobile technology increased revenue over the website by an overwhelming 200%.
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