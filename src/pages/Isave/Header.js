import React from 'react'

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
                I was part of a 2-man design team that built high functional mobile applications that led to the 12% increase in profit margin for the entity.
                </p>
              </li>
              <li>
                <p>
                Designed components, similar patterns and CTA's which reduced abandonment rate by 30%.
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
    </>
  )
}

export default Header