import { combineReducers } from 'redux'
import font from './font/reducer'
import page from './page/reducer'
import intermittence from './intermittence/reducer'
import contact from './contact/reducer'
import project from './project/reducer'
import userData from './userData/reducer'
import scrollReference from './scrollReference/reducer'
import newsletter from './newsletter/reducer'

const reducers = combineReducers({
  font,
  page,
  intermittence,
  contact,
  project,
  userData,
  scrollReference,
  newsletter,
})

export default reducers
