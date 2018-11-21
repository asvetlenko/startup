import {createAction} from 'redux-actions'

export const onLoadUsersList = createAction('ON_LOAD_USERS_LIST')
export const addUsers = createAction('ADD_USERS')

export const getUsersListRequest = createAction('GET_USERS_LIST_REQUEST')
export const getUsersListSuccess = createAction('GET_USERS_LIST_SUCCESS')
export const getUsersListFailed = createAction('GET_USERS_LIST_FAILED')



