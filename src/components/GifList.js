import React from 'react'
import PropTypes from 'prop-types'
import GifItem from './GifItem'

function GifList(props) {
  const { data } = props

  return (
    <div>
      { data.map(d => {
        return <GifItem key={d.id} data={d} />
      })}
   </div>
  )
}

export default GifList
