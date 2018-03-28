import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { requestData, registFavo } from '../actions'
import FavoriteList from '../components/FavoriteList'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
})

class FavoriteGif extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data, itemId, favoriteAt } = this.props
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {data.length === 0 && <h2>Not favorite item</h2>}
            {data.length > 0 && (
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                {data}
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

FavoriteGif.propTypes = {
}

function mapStateToProps(state) {
  const { gifSearch } = state
  const { data, itemId, favoriteAt } = gifSearch || {
    data: [],
    itemId: '',
    favoriteAt: 0,
  }
  // test 
  data.length = 0

  return {
    data,
    itemId,
    favoriteAt,
  }
}

export default connect(
  mapStateToProps
)(FavoriteGif)
