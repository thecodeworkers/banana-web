import { call, delay, put } from '@redux-saga/core/effects'
import { END } from '@redux-saga/core'

export const normalizedArray = response => response ? response : []

export const normalized = response => response ? response : {}

export const actionObject = (type: string, payload = null) => ({ type, payload })

export const paginate = (items: Array<any>, page_number: number = 1, page_size: number = 15) => {
  return items.slice((page_number - 1) * page_size, page_number * page_size);
}

export const scrollTo = (ref: any, offset = 0) => {
  window.scrollTo({ top: ref.offsetTop - offset, behavior: 'smooth' });
}

export const createMarkup = (text) => { return { __html: text }; }

export const validateFetch = ({ errors, data }) => {
  if (errors) throw errors[0].message
  if (typeof (data) == 'undefined') throw new Error('Cannot connect')

  return data
}

export function* showAlert(text, type = 'success', color = '#4FCF01', alert = 'SET_ALERT') {
  const keys = { text, color, type }
  yield put(actionObject(alert, {
    status: 1,
    ...keys
  }))

  yield delay(3000)

  yield put(actionObject(alert, {
    status: 2,
    ...keys
  }))
}

export function* manageError(error, toast = 'SET_ALERT', loader = 'SHOW_LOADER') {
  yield put(actionObject(loader, false))
  yield call(showAlert, error, 'error', toast)
}

export const mapProps = async (store, action) => {
  store.dispatch(action)
  store.dispatch(END)
  await store.sagaTask.toPromise();
}

export const roundNumber = (number) => Math.round(number * 100) / 100

export const elementId = (id: string) => {
  const element = document.querySelector(id)
  return element.id
}

export const parseDate = (currentDate) => {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  return `${day}/${month}/${year}`
}

export const scrolling = (reference: any) => {
  if (reference) {
    const target = reference.current
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  }
}

export const sleep = (time: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}


