import { combineReducers } from 'redux'
import font from './font/reducer'
import page from './page/reducer'
import intermittence from './intermittence/reducer'
import contact from './contact/reducer'
import project from './project/reducer'
import userData from './userData/reducer'

const reducers = combineReducers({
  font,
  page,
  intermittence,
  contact,
  project,
  userData,
})

export default reducers
