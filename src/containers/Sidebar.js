import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { favoriteCount } = this.props
    return (
      <div>
        <Sidebar favoriteCount={favoriteCount} />
      </div>
    )
  }
}

App.propTypes = {
  favoriteCount: PropTypes.number,
}

function mapStateToProps(state) {
  const { favoriteItem } = state
  const { data } = favoriteItem || {
    data: [],
  }

  const favoriteCount = data.length
  console.log(`favorite count : ${favoriteCount}`)

  return {
    favoriteCount
  }
}


export default connect(
  mapStateToProps
)(App)
