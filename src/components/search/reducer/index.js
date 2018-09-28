import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getSearchEvents = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)

const getChangeText = (state, action) => (
  fromJS(state)
    .setIn(['searchField'], action.searchField)
    .toJS()
)

const search = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.SEARCH_EVENTS:
      return getSearchEvents(state, action)
    case actionsType.CHANGE_TEXT:
      return getChangeText(state, action)
    default:
      return state
  }
}

export default search
