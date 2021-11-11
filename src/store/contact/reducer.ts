import { AnyAction } from 'redux'
import { CONTACT_FORM } from './action-types'

const initialState = {
  contactData: {}
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case CONTACT_FORM:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default pageReducer
