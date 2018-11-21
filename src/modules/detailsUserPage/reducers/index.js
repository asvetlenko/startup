import { combineReducers } from 'redux'

import id from './id'
import username from './username'
import email from './email'
import phone from './phone'
import address from './address'

export default combineReducers({
  id,
  username,
  email,
  phone,
  address
})
