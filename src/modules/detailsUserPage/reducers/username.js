import { handleActions, combineActions } from 'redux-actions'

import {
  setSelectedUserDetails,
  resetUserDetails
} from '../actions'

const defaultValue = null

export default handleActions({
  [combineActions(setSelectedUserDetails)] (state, {payload}) {
    return payload.username || null
  },
  [combineActions(resetUserDetails)] (state, {payload}) {
    return null
  }
}, defaultValue)
