import React, { Component } from 'react'
import axios from 'axios'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.getData()
  }

  getData() {
    const { match } = this.props
    const apiUrl = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&q=recordid:${match.params.id}`
    axios.get(apiUrl)
      .then((response) => {
        this.setState({
          data: this.formatEvents(response.data.records)
        })
      })
      .catch(() => {
      })
  }

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
        { data.map(item => (
          <ul className="text-center">
            <li className="font-weight-bold" key={item.title}>{item.title}</li>
            <li className="" key={item.city}>
              {`${item.city} ${item.address} du ${item.dateStart} au ${item.dateEnd}`}
            </li>
            <img className="imageEvent rounded mx-auto d-block" src={item.image} alt="" />
            <li className="" key={item.description}>{item.description}</li>
          </ul>
        ))}
      </div>
    )
  }
}

export default Details
