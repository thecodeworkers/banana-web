import { AnyAction } from 'redux'
import { SET_MENU_STATUS } from './action-types'

const initialState = {
  classMenu: '_mainMenu',
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
