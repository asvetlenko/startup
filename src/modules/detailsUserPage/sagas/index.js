import {put, takeLatest, select} from 'redux-saga/effects'
import * as userDetailsActions from '../actions'


function * onLoadUserDetails ({payload}) {
  const {selectedUserId} = payload
  yield put(userDetailsActions.getUserDetailsRequest({selectedUserId}))
}

function * getUserDetailsSuccess ({payload, response}) {
  yield put(userDetailsActions.setSelectedUserDetails(response.data))
}

function * usersPageSaga () {
  yield [
      takeLatest(userDetailsActions.onLoadUserDetails, onLoadUserDetails),
      takeLatest(userDetailsActions.getUserDetailsSuccess, getUserDetailsSuccess),
  ]
}

export default usersPageSaga
