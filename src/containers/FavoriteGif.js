import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { requestFavoriteItem } from '../actions'
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

  componentDidMount() {
    this.props.dispatch(requestFavoriteItem()) 
  }

  render() {
    const { isFetching, data, requestAt } = this.props
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {data.length === 0 && <h2>Not favorite item</h2>}
            {data.length > 0 && (
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <FavoriteList data={data} />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

FavoriteGif.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  requestAt: PropTypes.number
}

function mapStateToProps(state) {
  const { favoriteItem } = state
  console.log(favoriteItem)
  const { isFetching, data, requestAt } = favoriteItem || {
    isFetching: false,
    data: [],
    requestAt: 0,
  }

  return {
    isFetching,
    data,
    requestAt,
  }
}

export default connect(
  mapStateToProps
)(FavoriteGif)
