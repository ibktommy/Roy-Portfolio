import React from 'react'
import Userscard from '../../components/Userscard'
import data from './UsersCardData.json'

const UsersPersonas = () => {
  return (
    <div className="topmost-users-personas">
      <h4>User Personas</h4>
      <p>
        A review of targeted or potential users of Topmost wears website was done to effect any changes that will be made on the platform.
      </p>

      <div className="topmost-users-personas_card flex">
        {data.map(({ id, ...props }) => {
          return (
            <Userscard key={id} {...props} />
          )
        })}
      </div>
    </div>
  )
}

export default UsersPersonas