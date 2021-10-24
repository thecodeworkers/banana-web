import { all, fork } from 'redux-saga/effects'
import { watchGetMoviesAsync } from './test/saga'
import { watchGetPages } from './page/saga'

function* sagas() {
  yield all([
    fork(watchGetMoviesAsync),
    fork(watchGetPages)
  ])
}

export default sagas
