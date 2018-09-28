import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Results = ({ search }) => (
  <ul className="list-group">
    { search.data.map(item => (
      <li key={item.id} className="list-group-item">
        <Link className="nav-link posts" to={`/details/${item.id}`}>{`${item.title}`}</Link>
      </li>
    ))}
  </ul>
)

export default connect(state => state)(Results)
