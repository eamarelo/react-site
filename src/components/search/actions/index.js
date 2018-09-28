import axios from 'axios'

import actionsType from './actions-type'
import store from '../../../store'
import mock from '../../../mock/mock.json'

/**
 * Format events
 * @param {Array} events
 * @return {Array} eventsFormatted
 */
const formatEvents = events => (
  events.map(event => ({
    id: event.recordid,
    address: event.fields.address,
    city: event.fields.city,
    dateEnd: event.fields.date_end,
    dateStart: event.fields.date_start,
    description: event.fields.description,
    image: event.fields.image,
    title: event.fields.title
  }))
)

const getSearchEvents = events => ({
  type: actionsType.SEARCH_EVENTS,
  data: formatEvents(events)
})

export const getChangeText = searchField => ({
  type: actionsType.CHANGE_TEXT,
  searchField
})

export const getSearchedData = (searchField) => {
  const apiUrl = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&q=${searchField}`
  axios.get(apiUrl).then((response) => {
    console.log(response, 'elies')
    store.dispatch(getSearchEvents(response.data.records))
  }).catch(() => {
    console.log('recordmocj')
    store.dispatch(getSearchEvents(mock.records))
  })
}
