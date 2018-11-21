import { handleActions, combineActions } from 'redux-actions'

import {
  setSelectedUserDetails,
  resetUserDetails
} from '../../actions'

const defaultValue = null

export default handleActions({
  [combineActions(setSelectedUserDetails)] (state, {payload}) {
    return payload.address ? payload.address.street : null
  },
  [combineActions(resetUserDetails)] (state, {payload}) {
    return null
  }
}, defaultValue)
