import React from 'react'

const Userscard = ({ image, name, job, location, review }) => {
  return (
    <div className="topmost-users-personas_card-content row-flex">
      <div className="topmost-users-personas_card-content_top">
        <img src={image} alt={name} />
        <div className="topmost-users-personas_card-content_top-texts row-flex">
          <p>
            <span>name: </span>
            <span>{name}</span>
          </p>
          <p>
            <span>job: </span>
            <span>{job}</span>
          </p>
          <p>
            <span>location: </span>
            <span>{location}</span>
          </p>
        </div>
      </div>

      <div className="topmost-users-personas_card-content_bottom">
        <p>
          {review}
        </p>
      </div>
    </div>
  )
}

export default Userscard