import { actionObject } from '@utils'
import { SET_LANGUAGE, SET_MENU_STATUS, SET_ALERT } from './action-types'

export const setStatus = (status: any) => actionObject(SET_MENU_STATUS, status)
export const setLanguage = (lang) => actionObject(SET_LANGUAGE, lang)
export const setAlert = (config: any) => actionObject(SET_ALERT, config)
