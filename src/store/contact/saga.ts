import { takeLatest, call, put } from 'redux-saga/effects'
import { GraphQlClient, actionObject } from '@utils'
import { ContactMutation } from '@graphql/mutations'
import { SEND_CONTACT_DATA, SENDED } from './action-types'

function* sendContactData() {
  try {
    let response = yield call(GraphQlClient, ContactMutation())
    if (response?.data) yield put(actionObject(SENDED, true))

  } catch (err) {
    throw new Error(err.message)
  }
}

export function* watchSendContactDataAsync() {
  yield takeLatest(SEND_CONTACT_DATA, sendContactData)
}

