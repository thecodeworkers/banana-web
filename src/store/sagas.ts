import { all, fork } from 'redux-saga/effects'
import { watchGetPages } from './page/saga'
import { watchSendContactDataAsync } from './contact/saga'

function* sagas() {
  yield all([
    fork(watchGetPages),
    fork(watchSendContactDataAsync)
  ])
}

export default sagas
