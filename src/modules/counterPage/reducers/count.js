import { handleActions, combineActions } from 'redux-actions'

import {
    increment,
    decrement,
    onRecordingStarted,
    onRecordingStopped,
    onRecordingPaused
} from '../actions'

const defaultValue = 0

export default handleActions({
    [combineActions(increment)] (state, {payload}) {
        return state + 1
    },
    [combineActions(decrement)] (state, {payload}) {
        return state - 1
    }
}, defaultValue)
