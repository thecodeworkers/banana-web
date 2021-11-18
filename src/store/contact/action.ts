import { actionObject } from '@utils'
import { CONTACT_FORM, SEND_CONTACT_DATA, SENDED } from './action-types'

export const setContactForm = (data: any) => actionObject(CONTACT_FORM, data)
export const sendContactData = (data: any) => actionObject(SEND_CONTACT_DATA, data)
export const setSended = (param: boolean) => actionObject(SENDED, param)
