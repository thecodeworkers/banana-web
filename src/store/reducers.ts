import { combineReducers } from 'redux'
import font from './font/reducer'
import page from './page/reducer'
import intermitence from './intermitence/reducer'

const reducers = combineReducers({
  font,
  page,
  intermitence
})

export default reducers
