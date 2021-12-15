import { AnyAction } from 'redux'
import { SET_REFERENCE } from './action-types'

const initialState = {
  buyRef: null,
  purposeRef: null,
  guestsRef: null,
  homeReference: {
    current: '',
    hero: false,
    services: false,
  }
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_REFERENCE:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default reducer
