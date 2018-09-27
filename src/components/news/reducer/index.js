import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getLastEvents = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)

const news = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_LAST_EVENTS:
      return getLastEvents(state, action)
    default:
      return state
  }
}

export default news
