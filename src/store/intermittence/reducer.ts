import { AnyAction } from 'redux'
import { SET_LANGUAGE, SET_MENU_STATUS } from './action-types'

const initialState = {
  languages: { es: 'Español', en: 'English' },
  selectedLanguage: 'es',
  classMenu: '_mainMenu',
  alert: 0,
  showLoader: true
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_LANGUAGE:
      return { ...state, selectedLanguage: payload }
    case SET_MENU_STATUS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
