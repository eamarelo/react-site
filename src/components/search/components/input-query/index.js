import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchedData, getChangeText } from '../../actions'

class SearchQuery extends Component {
  constructor(props) {
    super(props)

    const { dispatch } = this.props

    this.dispatch = dispatch
    this.timer = 1
  }

  handleChange(e) {
    e.persist()

    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.dispatch(getChangeText(e.target.value))
    }, 1000)
  }

  handleSubmit(e, searchField) {
    console.log('eliesssss')
    e.preventDefault()
    getSearchedData(searchField)
  }

  render() {
    const { search } = this.props
    const { searchField } = search

    return (
      <form>
        <input type="text" className="orm-control mr-sm-2" name="texte" onChange={e => this.handleChange(e)} />
        <button type="submit" className="btn" onClick={e => this.handleSubmit(e, searchField)}>Clicl me</button>
      </form>
    )
  }
}

export default connect(state => state)(SearchQuery)

