import React from 'react'
import ShowCaseImage from '../../images/topmost/main/showcase.png'

const Header = () => {
  return (
    <>
      <header className="project-header">
        Topmost Wears is a business that sells luxurious, quality clothing and clothing accessories to all locations in Nigeria.
        I overtook the task of redesigning their web platform and helping to solve problems faced by its users.
      </header>

      <div className="header-details flex">
        <div className="header-details_role">
          <h4>My Role</h4>
          <p>Product Designer</p>
        </div>
        <div className="header-details_duration">
          <h4>Duration</h4>
          <p>May 2022- August 2022</p>
        </div>
        <div className="header-details_platform">
          <h4>Platform</h4>
          <p>Responsive Website</p>
        </div>
      </div>

      <div className="header-showcase flex">
        <img src={ShowCaseImage} alt="ShowcaseImage" />
      </div>
    </>
  )
}

export default Header