import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        N-PAY is a fintech app I designed for the Federal Inland Revenue Service (FIRS) of the federal republic of Nigeria to provide a platform where citizens can pay taxes and other bills meant for the government.
      </header>

      <div className="header-details flex">
        <div className="header-details_role">
          <h4>My Role</h4>
          <p>Product Designer</p>
          <p>User research & testing</p>
        </div>
        <div className="header-details_duration">
          <h4>Duration</h4>
          <p>Feb 2022- April 2022</p>
        </div>
        <div className="header-details_platform">
          <h4>Platform</h4>
          <p>Mobile Application</p>
        </div>
      </div>
    </>
  )
}

export default Header