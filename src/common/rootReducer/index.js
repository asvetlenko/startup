import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {counterReducer as counter} from '../../modules/counterPage'
import {userReducer as users} from '../../modules/usersPage'
import {detailsUserReducer as selectedUser} from '../../modules/detailsUserPage'

const rootReducer = (history) => combineReducers({
  counter,
  users,
  selectedUser,
  router: connectRouter(history)
})

export default rootReducer
