import { AnyAction } from 'redux'
import { SET_PROJECTS } from './action-types'

const initialState = {
  projects: [],
  categories: []
}

const projectReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_PROJECTS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default projectReducer
