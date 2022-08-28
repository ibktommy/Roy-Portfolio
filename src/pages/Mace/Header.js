import React from 'react'

const Header = () => {
  return (
    <>
      <header className="project-header">
        Mace makes and sells high quality furnitures. I boosted the brand by designing the mobile app, and user experience.
      </header>

      <div className="header-details flex">
        <div className="header-details_left">
          <div className="header-details_right-role">
            <h4>My Role</h4>
            <p>
              Product designer, UX research</p>
          </div>
          <div className="header-details_right-duration">
            <h4>Duration</h4>
            <p>Jul 2020- Nov 2020</p>
          </div>
        </div>

        <div className="header-details_right">
          <h4>Impact</h4>
          <ul>
            <li>
              <p>
                I designed a fast, user friendly, one-screen checkout system that decreased dev handoff time.
              </p>
            </li>
            <li>
              <p>
                Created a clean solution tailored at meeting user requests, which allows Mace to become the leading online furniture store with the app accounting for 70% sales origin.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header