import { AnyAction } from 'redux'
import { SET_DATA, FETCH_USER_DATA_ASYNC } from './action-types'

const initialState = {
  userData: {},
  success: false
}

const userDataReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_DATA:
      return { ...state, ...payload }
    case FETCH_USER_DATA_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default userDataReducer
