import { AnyAction } from 'redux'
import { CONTACT_FORM, SENDED } from './action-types'

const initialState = {
  contactData: {},
  sended: false
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case CONTACT_FORM:
      return { ...state, ...payload }

    case SENDED:
      return { ...state, sended: payload }

    default:
      return state
  }
}

export default pageReducer
