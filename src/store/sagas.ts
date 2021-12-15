import { all, fork } from 'redux-saga/effects'
import { watchGetPages } from './page/saga'
import { watchSendContactDataAsync } from './contact/saga'
import { watchFetchUserDataAsync } from './userData/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSendContactDataAsync),
    fork(watchFetchUserDataAsync),
  ])
}

export default sagas
