import { combineReducers } from 'redux'
import test from './test/reducer'
import font from './font/reducer'
import intermitence from './intermitence/reducer'

const reducers = combineReducers({
  test,
  font,
  intermitence
})

export default reducers
