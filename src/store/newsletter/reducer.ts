import { AnyAction } from 'redux'
import { SAVE_CONTACT_ASYNC } from './action-types'

const initialState = {
  success: false
}

const reducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SAVE_CONTACT_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default reducer
