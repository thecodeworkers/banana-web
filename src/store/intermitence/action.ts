import { actionObject } from '@utils'
import { SET_MENU_STATUS } from './action-types'

export const setStatus = (status: any) => actionObject(SET_MENU_STATUS, status)
