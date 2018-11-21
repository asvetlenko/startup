import { handleActions, combineActions } from 'redux-actions'

import { addUsers } from '../actions'

const defaultValue = []

export default handleActions({
    [combineActions(addUsers)] (state, {payload}) {
        return payload
    }
}, defaultValue)
