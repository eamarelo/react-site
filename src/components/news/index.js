import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getLastEvents } from './actions'

import Results from './components/results/index.js'

class News extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getLastEvents())
  }

  render() {
    const { news } = this.props

    return (
      <div>
        <Results data={news.data} />
      </div>
    )
  }
}

export default connect(state => state)(News)
