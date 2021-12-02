import { actionObject } from '@utils'
import { SET_PROJECTS } from './action-types'

export const setProjects = (projects) => actionObject(SET_PROJECTS, projects)
