import React from 'react'
import PropTypes from 'prop-types'
import FavoriteItem from './FavoriteItem'

function FavoriteList(props) {
  const { data } = props

  return (
    <div>
      { data.map(d => {
        return <FavoriteItem key={d.id} data={d} />
      })}
   </div>
  )
}

export default FavoriteList
