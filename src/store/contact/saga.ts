import { takeLatest, call, put } from 'redux-saga/effects'
import { GraphQlClient, actionObject } from '@utils'
import { ContactMutation } from '@graphql/mutations'
import { SEND_CONTACT_DATA } from './action-types'

function* sendContactData() {

  try {
    let response = yield call(GraphQlClient, ContactMutation())

    console.log('RESPONSEEE', response)

  } catch (err) {

  }
}

export function* watchSendContactDataAsync() {
  yield takeLatest(SEND_CONTACT_DATA, sendContactData)
}

