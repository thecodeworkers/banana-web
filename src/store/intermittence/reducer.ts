import { AnyAction } from 'redux'
import { SET_LANGUAGE } from './action-types'

const initialState = {
  languages: { es: 'Español', en: 'English' },
  selectedLanguage: 'es'
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_LANGUAGE:
      return { ...state, selectedLanguage: payload }
    default:
      return state
  }
}

export default pageReducer
