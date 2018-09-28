import React from 'react'
import { connect } from 'react-redux'
import Results from './components/results'
import InputQuery from './components/input-query'

const Search = () => (
  <div>
    <InputQuery />
    <Results />
  </div>
)

export default connect(state => state)(Search)
