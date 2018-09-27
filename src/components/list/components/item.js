import React, { Component } from 'react'

class Item extends Component {
  handleOnClick(e) {
    alert(e.currentTarget.textContent)
  }

  render() {
    const { name, age } = this.props

    return (<li onClick={e => this.handleOnClick(e)}>{`${name} ${age}`}</li>)
  }
}

export default Item
