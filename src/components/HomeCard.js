import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ title, details, image, btnText, reverse, tag, link }) => {
  // Function to Make Each Page Begin From Top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <>
      <div className={reverse ? 'project-summary reverse' : 'project-summary'}>
        <div className="project-summary-image">
          <img
            src={image}
            alt={title}
          />
        </div>
        <div className="project-summary-text row-flex">
          {tag && <p className='project-summary-text-tag'>{tag}</p>}
          <h4 className="project-summary-text-title">{title}</h4>
          <p className="project-summary-text-para">
            {details}
          </p>
          <Link to={`/${link}`} className='btn flex' onClick={scrollToTop}>{btnText}</Link>
        </div>
      </div>
    </>
  )
}

export default HomeCard