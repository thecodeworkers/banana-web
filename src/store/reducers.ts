import { combineReducers } from 'redux'
import font from './font/reducer'
import page from './page/reducer'
import intermittence from './intermittence/reducer'
const reducers = combineReducers({
  font,
  page,
  intermittence
})

export default reducers
