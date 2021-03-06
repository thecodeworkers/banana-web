import { takeLatest, call, put, select } from 'redux-saga/effects'
import { GraphQlClient, actionObject } from '@utils'
import { UserData } from '@graphql/mutations'
import { FETCH_USER_DATA, FETCH_USER_DATA_ASYNC } from './action-types'
import { showAlert } from '@utils'
import { getUserData } from '../selectors'

function* fetchUserData() {
  try {
    const { userData: { userData }, intermittence: { scheduleNumber } } = yield select((state: any) => state)

    const response = yield call(GraphQlClient, UserData({ ...userData, number: scheduleNumber }))
    if ((response?.errors && response?.errors?.length) || !Object.keys(response).length) {
      return yield call(showAlert, 'Error!', 'error', '#FF4F4F')
    }

    if (response?.data) yield put(actionObject(FETCH_USER_DATA_ASYNC, { success: true }))
    yield call(showAlert, 'Success!', 'success', '#4FCF01')
  } catch (err) {
    yield call(showAlert, 'Error!', 'error', '#FF4F4F')
  }
}

export function* watchFetchUserDataAsync() {
  yield takeLatest(FETCH_USER_DATA, fetchUserData)
}

