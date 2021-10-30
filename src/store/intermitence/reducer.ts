import { AnyAction } from 'redux'
import { SET_MENU_STATUS } from './action-types'

const initialState = {
  menu: null,
}

const intermitencReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_MENU_STATUS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default intermitencReducer
