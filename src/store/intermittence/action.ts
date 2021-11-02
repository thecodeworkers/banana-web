import { actionObject } from '@utils'
import { SET_LANGUAGE } from './action-types'

export const setLanguage = (lang) => actionObject(SET_LANGUAGE, lang)
