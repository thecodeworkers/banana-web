import { combineReducers } from 'redux'
import test from './test/reducer'
import font from './font/reducer'

const reducers = combineReducers({
  test,
  font
})

export default reducers
