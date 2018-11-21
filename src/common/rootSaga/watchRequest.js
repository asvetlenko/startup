import { call, put, takeEvery, select } from 'redux-saga/effects'
import _ from 'lodash'

import selector from './../selector'
import apiMethods from '../apiMethods'
import apiService from '../apiService'

function * callAPI (action) {
  //const apiHostName = yield select(selector.getApiUrl)
  //const accessToken = yield select(selector.getAccessToken)
  const data = apiMethods[_.camelCase(action.type)](action.payload)
  try {
    const response = yield call(apiService, {
      //hostName: apiHostName,
      //accessToken,
      data
    })

    const newType = action.type.replace('_REQUEST', '_SUCCESS')
    yield put({type: newType, response, payload: action.payload})
  } catch (e) {
    const errorModel = {
      type: action.type.replace('_REQUEST', '_FAILED'),
      payload: action.payload,
      message: e.statusText,
      status: e.status,
      response: e.response
    }
    console.error(errorModel)
    yield put(errorModel)
  }
}

export default function * watchRequest () {
  yield takeEvery((action) => /^.*_REQUEST$/.test(action.type), callAPI)
}
