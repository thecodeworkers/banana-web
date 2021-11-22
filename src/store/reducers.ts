import { combineReducers } from 'redux'
import font from './font/reducer'
import page from './page/reducer'
import intermittence from './intermittence/reducer'
import contact from './contact/reducer'

const reducers = combineReducers({
  font,
  page,
  intermittence,
  contact
})

export default reducers
