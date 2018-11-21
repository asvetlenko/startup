import React from 'react'
import UserItem from '../UserItem'

import './style.less'
import PropTypes from "prop-types";

const UsersList = ({usersList}) => {
  return <ul>
    {usersList.map(user => <UserItem key={user.id} {...user} />)}
  </ul>
}

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired
}

export default UsersList
