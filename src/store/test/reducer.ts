import { AnyAction } from 'redux'
import { GET_TEST_ASYNC } from './action-types'

const initialState = {
  test: ''
}

const colorsReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_TEST_ASYNC:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default colorsReducer
