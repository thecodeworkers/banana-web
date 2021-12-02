import { AnyAction } from 'redux'
import { SET_PROJECTS } from './action-types'

const initialState = {
  projects: []
}

const projectReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_PROJECTS:
      return { ...state, projects: payload }
    default:
      return state
  }
}

export default projectReducer