import { all, fork } from 'redux-saga/effects'
import { watchGetPages } from './page/saga'
import { watchSendContactDataAsync } from './contact/saga'
import { watchFetchUserDataAsync } from './userData/saga'
import { watchSaveContact } from './newsletter/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSendContactDataAsync),
    fork(watchFetchUserDataAsync),
    fork(watchSaveContact),
  ])
}

export default sagas
