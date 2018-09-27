import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Results extends Component {
  render() {
    const { data } = this.props

    return (
      <ul className="list-group">
        { data.map(item => (
          <li
            key={item.id}
            className="list-group-item"
          >
            <Link className="nav-link posts" to={`/details/${item.id}`}>{`${item.title}`}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default Results
