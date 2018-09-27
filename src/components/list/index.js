import React, { Component } from 'react'

import Item from './components/item'

class List extends Component {
  render() {
    const { list } = this.props

    return (
      <ul>
        {list.map(item => <Item name={item.name} age={item.age} />)}
      </ul>
    )
  }
}

export default List
