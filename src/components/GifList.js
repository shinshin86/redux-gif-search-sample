import React from 'react'
import PropTypes from 'prop-types'
import GifItem from './GifItem'

function GifList(props) {
  const { data, onFavoriteClick } = props

  return (
    <div>
      { data.map(d => {
        return <GifItem key={d.id} data={d} favoriteClick={() => onFavoriteClick(d.id)} />
      })}
   </div>
  )
}

export default GifList
