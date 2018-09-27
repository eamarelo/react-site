import React, { Component } from 'react'

class SearchQuery extends Component {
  constructor(props) {
    super(props)
    this.state = { searchField: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ searchField: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { update } = this.props
    const { searchField } = this.state
    update(searchField)
  }

  render() {
    const { searchField } = this.state

    return (
      <form>
        <input type="text" className="orm-control mr-sm-2" name="texte" value={searchField} onChange={this.handleChange} />
        <input type="submit" className="btn" value="Submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default SearchQuery
