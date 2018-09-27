import { combineReducers } from 'redux'

import news from './components/news/reducer'

export default combineReducers({
  news,
  search
})
