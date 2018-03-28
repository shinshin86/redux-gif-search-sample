import React from 'react'
import PropTypes from 'prop-types'

function FavoriteList(props) {
  const { data } = props

  return (
    <div>
      {data.id}
   </div>
  )
}

export default FavoriteList
