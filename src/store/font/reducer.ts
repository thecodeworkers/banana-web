import { AnyAction } from 'redux'
import { SET_FONT } from './action-types'

const initialState = {
  italic: {},
  normal: {},
}

const fontReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_FONT:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default fontReducer
