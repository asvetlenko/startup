import { combineReducers } from 'redux'

import city from './city'
import street from './street'
import zipcode from './zipcode'

export default combineReducers({
  city,
  street,
  zipcode
})
