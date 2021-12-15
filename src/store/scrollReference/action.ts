import { actionObject } from '@utils'
import { SET_REFERENCE } from './action-types'

export const setReference = (payload) => actionObject(SET_REFERENCE, payload)
