import { takeLatest, call, put } from 'redux-saga/effects'
import { actionObject, GraphQlClient, manageError } from '@utils'
import { homePage, fontQuery, footerQuery, headerQuery, aboutPage, categoriesQuery, projectsQuery, schedulePage, custom404 } from '@graphql/query'
import { GET_PAGE, GET_PAGE_ASYNC } from './action-types'
import { setFonts } from '../font/action'
import { setLanguage } from '@store/actions'
import { setProjects } from '@store/project/action'

const getQueryPages = (page = 'home', locale = 'en') => {

  const pages = {
    home: homePage,
    aboutUs: aboutPage,
    portfolio: categoriesQuery,
    schedule: schedulePage,
    custom404: custom404
  }
  return `
    query {
      ${headerQuery(locale)}
      ${footerQuery(locale)}
      ${`page:${pages[page](locale)}`}
      ${fontQuery}
      ${page === 'portfolio' ? projectsQuery(locale) : ''}
    }
  `
}

function* getPageAsync({ payload }) {

  try {
    const { query, language = 'es-VE' } = payload
    const response = yield call(GraphQlClient, getQueryPages(query, language), { locale: language })
    const { page, font, header, footer, projects } = response?.data
    yield put(setFonts(font))
    if (query === 'portfolio') yield put(setProjects({ projects, categories: page }))
    yield put(actionObject(GET_PAGE_ASYNC, { [query]: page, header, footer }))
    yield put(setLanguage(language))
  } catch (err) {
    //yield call(manageError, err)
  }
}

export function* watchGetPages() {
  yield takeLatest(GET_PAGE, getPageAsync)
}

