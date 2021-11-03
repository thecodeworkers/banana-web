import { takeLatest, call, put } from 'redux-saga/effects'
import { GraphQlClient, actionObject } from '@utils'
import { TestQuery } from '../../graphql/query/entries'
import { GET_TEST, GET_TEST_ASYNC } from './action-types'

function* getMovies() {


  try {
    let response = yield call(GraphQlClient, TestQuery)


  } catch (err) {

  }
}

export function* watchGetMoviesAsync() {
  yield takeLatest(GET_TEST, getMovies)
}
