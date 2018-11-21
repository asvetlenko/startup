import {createAction} from 'redux-actions'

export const onLoadUserDetails = createAction('ON_LOAD_USER_DETAILS')
export const setSelectedUserDetails = createAction('SET_SELECTED_USER_DETAILS')
export const resetUserDetails = createAction('RESET_USER_DETAILS')

export const getUserDetailsRequest = createAction('GET_USER_DETAILS_REQUEST')
export const getUserDetailsSuccess = createAction('GET_USER_DETAILS_SUCCESS')
export const getUserDetailsFailed = createAction('GET_USER_DETAILS_FAILED')



