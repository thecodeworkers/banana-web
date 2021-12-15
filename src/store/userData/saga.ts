import { takeLatest, call, put, select } from 'redux-saga/effects'
import { GraphQlClient, actionObject, showAlert } from '@utils'
import { UserData } from '@graphql/mutations'
import { FETCH_USER_DATA, FETCH_USER_DATA_ASYNC } from './action-types'
import { getUserData } from '../selectors'

function* fetchUserData({ payload }) {
  try {
    const data = yield select(getUserData)
    const { userData } = data
    const response = yield call(GraphQlClient, UserData(userData))

    if (!Object.keys(response).length) yield call(showAlert, 'Error!', 'error', '#FF4F4F')
    if (response?.data) yield put(actionObject(FETCH_USER_DATA_ASYNC, { success: true }))
    yield call(showAlert, 'Success!', 'success', '#4FCF01')
  } catch (err) {
    yield call(showAlert, 'Error!', 'error', '#FF4F4F')
  }
}

export function* watchFetchUserDataAsync() {
  yield takeLatest(FETCH_USER_DATA, fetchUserData)
}

