import {put, takeLatest, select} from 'redux-saga/effects'
import * as usersActions from '../actions'


function * onLoadUsersList ({payload}) {
  yield put(usersActions.getUsersListRequest())
}

function * getUsersListSuccess ({payload, response}) {
  yield put(usersActions.addUsers(response.data))
}

function * usersPageSaga () {
  yield [
      takeLatest(usersActions.onLoadUsersList, onLoadUsersList),
      takeLatest(usersActions.getUsersListSuccess, getUsersListSuccess),
  ]
}

export default usersPageSaga
