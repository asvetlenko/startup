import React from 'react'
import { Link } from 'react-router-dom'

import './style.less'
import PropTypes from 'prop-types';

const UsersList = ({id, name}) => {
  return <li>
    <Link to={`/user/${id}`}>{name}</Link>
  </li>
}

UsersList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}


export default UsersList
