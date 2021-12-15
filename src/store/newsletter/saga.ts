import { takeLatest, call, put } from 'redux-saga/effects'
import { GraphQlClient, actionObject, showAlert } from '@utils'
import { NewsLetterMutation } from '@graphql/mutations'
import { SAVE_CONTACT, SAVE_CONTACT_ASYNC } from './action-types'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function* saveContactAsync({ payload }) {
  try {
    yield put(actionObject(SAVE_CONTACT_ASYNC, { success: false }))

    if (!validateEmail(payload)) {
      yield call(showAlert, 'Error!', 'error', '#FF4F4F')
      return
    }

    const response = yield call(GraphQlClient, NewsLetterMutation(payload))

    if (!Object.keys(response).length) yield call(showAlert, 'Error!', 'error', '#FF4F4F')
    if (response?.data) yield put(actionObject(SAVE_CONTACT_ASYNC, { success: true }))

    yield call(showAlert, 'Ok!')
  } catch (err) {
    yield call(showAlert, 'Error!', 'error', '#FF4F4F')
  }
}

export function* watchSaveContact() {
  yield takeLatest(SAVE_CONTACT, saveContactAsync)
}
