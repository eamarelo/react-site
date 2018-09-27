import axios from 'axios'

import actionsType from './actions-type'

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

const getEventsData = () => (
  new Promise((resolve, reject) => {
    const apiUrl = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&sort=date_start'

    axios.get(apiUrl).then((response) => {
      resolve(response.records)
    }).catch((err) => {
      reject(err)
    })
  })
)

export const getLastEvents = async () => {
  const events = await getEventsData()

  return {
    type: actionsType.GET_LAST_EVENTS,
    data: formatEvents(events)
  }
}

