import { takeLatest, call, put } from 'redux-saga/effects'
import { GraphQlClient, actionObject } from '@utils'
import { TestQuery } from '../../graphql'
import { GET_TEST, GET_TEST_ASYNC } from './action-types'

function* getMovies() {

  console.log('ENTER SAGAAAS')

  try {
    let response = yield call(GraphQlClient, TestQuery)
    console.log('helou', response)

  } catch (err) {
    console.log(err.message)
  }
}

export function* watchGetMoviesAsync() {
  yield takeLatest(GET_TEST, getMovies)
}
