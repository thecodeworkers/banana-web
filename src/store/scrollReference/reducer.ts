import { AnyAction } from 'redux'
import { SET_REFERENCE } from './action-types'

const initialState = {
  heroRef: null,
  servicesRef: null,
  buyRef: null,
  purposeRef: null,
  guestsRef: null,
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
