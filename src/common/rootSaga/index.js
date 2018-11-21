import watchRequest from './watchRequest'

import {homePageSaga} from '../../modules/homePage'
import {helloPageSaga} from '../../modules/helloPage'
import {counterPageSaga} from '../../modules/counterPage'
import {userPageSaga} from '../../modules/usersPage'
import {detailsUserPageSaga} from '../../modules/detailsUserPage'

function* rootSaga() {
  yield [
    watchRequest(),

    homePageSaga(),
    helloPageSaga(),
    counterPageSaga(),
    userPageSaga(),
    detailsUserPageSaga()
  ]
}

export default rootSaga
