import { takeLatest, call, put } from 'redux-saga/effects'
import { GraphQlClient, actionObject } from '@utils'
import { ContactMutation } from '@graphql/mutations'
import { SEND_CONTACT_DATA, SENDED } from './action-types'
import { showAlert } from '@utils'

function* sendContactData({ payload }) {
  try {
    let response = yield call(GraphQlClient, ContactMutation(payload))
    if ((response?.errors && response?.errors?.length) || !Object.keys(response).length) {
      return yield call(showAlert, 'Error!', 'error', '#FF4F4F')
    }
    if (response?.data) yield put(actionObject(SENDED, true))
  } catch (err) {
    yield call(showAlert, 'Error!', 'error', '#FF4F4F')
  }
}

export function* watchSendContactDataAsync() {
  yield takeLatest(SEND_CONTACT_DATA, sendContactData)
}

