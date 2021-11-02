import { combineReducers } from 'redux'
import font from './font/reducer'
import page from './page/reducer'

const reducers = combineReducers({
  font,
  page
})

export default reducers
