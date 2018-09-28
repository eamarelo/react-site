import { combineReducers } from 'redux'

import news from './components/news/reducer'
import search from './components/search/reducer'

export default combineReducers({
  news,
  search
})
