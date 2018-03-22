import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GifItem from './GifItem'

export default class GifList extends Component {
  render() {
    const { data } = this.props

    return (
      <div>
        { data.map(d => {
          return <GifItem key={d.id} data={d} />
        })}
     </div>
    )
  }
}

