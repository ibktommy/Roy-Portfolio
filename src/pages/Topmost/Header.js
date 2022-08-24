import React from 'react'

const Header = () => {
  return (
    <>
      <header className="project-header">
        Topmost Wears is business that sells luxurious, quality clothing and clothing accessories to all locations in Nigeria.
        I overtook the task of redesigning their web platform and helping to solve problems faced by its users.
      </header>

      <div className="header-details flex">
        <div className="header-details_role">
          <h4>My Role</h4>
          <p>Product Designer</p>
          <p>Webflow Developer</p>
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
    </>
  )
}

export default Header