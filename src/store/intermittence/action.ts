import { actionObject } from '@utils'
import { SET_LANGUAGE } from './action-types'
import { SET_MENU_STATUS } from './action-types'

export const setStatus = (status: any) => actionObject(SET_MENU_STATUS, status)
export const setLanguage = (lang) => actionObject(SET_LANGUAGE, lang)
