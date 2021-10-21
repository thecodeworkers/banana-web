import { all, fork } from 'redux-saga/effects'
import { watchGetMoviesAsync } from './test/saga'

function* sagas() {
  yield all([
    fork(watchGetMoviesAsync),
  ])
}

export default sagas
