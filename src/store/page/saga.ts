import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError, validateFetch } from '@utils'
import { homePage, fontQuery, footerQuery, headerQuery } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC } from './action-types'
import { setFonts } from '../font/action'
import { setLanguage } from '@store/actions'

const getQueryPages = (page, locale = 'es') => {

  const pages = {
    home: homePage
  }
  return `
    query {
      ${headerQuery(locale)}
      ${footerQuery(locale)}
      ${pages[page](locale)}
      ${fontQuery}
    }
  `
}

function* getPageAsync({ payload }) {
  try {
    const { query, language = 'es' } = payload

    const response = yield call(GraphQlClient, getQueryPages(query, language), { locale: language })

    const { page, font, header, footer } = validateFetch(response)
    yield put(setFonts(font))
    yield put(actionObject(GET_PAGE_ASYNC, { [query]: page, header, footer }))
    yield put(setLanguage(language))
  } catch (err) {
    console.log(err)
    yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

