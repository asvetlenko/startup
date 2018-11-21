import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'

const DetailsUserPage = ({id, username, email, phone, address:{street, city} = {}}) => (
  <div>
    <h1>User Details #{id}</h1>
    <dl>
      <dt>User name:</dt>
      <dd>{username}</dd>

      <dt>Email</dt>
      <dd>{email}</dd>

      <dt>Phone</dt>
      <dd>{phone}</dd>

      <dt>Сity</dt>
      <dd>{city}</dd>

      <dt>Street</dt>
      <dd>{street}</dd>
    </dl>
    <div>
      <Link to="/users"><b>Go Back To Users List</b></Link>
    </div>
  </div>
)

export default DetailsUserPage
