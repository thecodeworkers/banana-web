import { AnyAction } from 'redux'
import { SET_LANGUAGE, SET_MENU_STATUS, SET_ALERT } from './action-types'

const initialState = {
  languages: { es: 'Español', en: 'English' },
  selectedLanguage: 'es',
  opposedLang: 'en',
  classMenu: '_mainMenu',
  alert: {
    status: 0,
    text: 'success!',
    color: '#4FCF01',
    type: 'success'
  },
  showLoader: true,
  theme: 'light',
  formModal: false,
  validationModal: false,
  scheduleNumber: 0,
  showAgain: true,
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_LANGUAGE:
      return { ...state, selectedLanguage: payload }
    case SET_MENU_STATUS:
      return { ...state, ...payload }
    case SET_ALERT:
      return { ...state, alert: payload }
    default:
      return state
  }
}

export default pageReducer
