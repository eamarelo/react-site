import React, { Component } from 'react'
// import axios from 'axios'

import Results from './components/results'
import InputQuery from './components/input-query'
import mock from '../../mock/mock.json'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.updateBind = this.update.bind(this)
  }

  // update(query) {
  //   const apiUrl = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&q=${query}`

  //   axios.get(apiUrl)
  //     .then((response) => {
  //       this.setState({
  //         data: this.formatEvents(response.data.records)
  //       })
  //     })
  //     .catch(() => {
  //     })
  // }

  update(query) {
    this.state.data = this.formatEvents(mock.records)
    this.setState({
      data: this.formatEvents(mock.records)
    })
    console.log(query)
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <InputQuery update={this.updateBind} />
        <Results data={data} />
      </div>
    )
  }
}

export default Search
