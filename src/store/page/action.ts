import { actionObject } from '@utils'
import { GET_PAGE } from './action-types'

export const getPage = (page) => actionObject(GET_PAGE, page)
