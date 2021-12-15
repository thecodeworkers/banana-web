import { actionObject } from '@utils'
import { SET_DATA, FETCH_USER_DATA } from './action-types'

export const setUserData = (data: any) => actionObject(SET_DATA, data)
export const fetchUserData = (data: any) => actionObject(FETCH_USER_DATA, data)
