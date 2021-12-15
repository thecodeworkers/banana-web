import { actionObject } from '@utils'
import { SAVE_CONTACT } from './action-types'

export const saveContact = (payload: string) => actionObject(SAVE_CONTACT, payload)
