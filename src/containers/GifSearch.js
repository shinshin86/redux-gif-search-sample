import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { requestData, registFavo } from '../actions'
import GifList from '../components/GifList'
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

class App extends Component {
  constructor(props) {
    super(props)

    // local state
    this.state = {
      searchText: '',
    }
  }

  handleChange = searchText => event => {
    this.setState({
      [searchText]: event.target.value,
    })
  }

  render() {
    const { data, isFetching, lastUpdated, searchRequestClick, onFavoriteClick } = this.props
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              id="searchText"
              label="SearchText"
              className={styles.textField}
              value={this.state.searchText}
              onChange={this.handleChange('searchText')}
              margin="normal"
            />
            <Button size="small" color="primary" onClick={() => searchRequestClick(this.state.searchText)}>
              <i className="material-icons">search</i>
            </Button>
          </Grid>
          <Grid item xs={12}>
            {isFetching && data.length === 0 && <h2>Loading...</h2>}
            {!isFetching && data.length === 0 && <h2>Let's GIF Search!</h2>}
            {data.length > 0 && (
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <GifList data={data} onFavoriteClick={onFavoriteClick} />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
}

function mapStateToProps(state) {
  const { gifSearch } = state
  const { isFetching, lastUpdated, data, itemId, favoriteAt } = gifSearch || {
    isFetcing: false,
    data: [],
    lastUpdated: 0,
    itemId: '',
    favoriteAt: 0,
  }

  return {
    gifSearch,
    isFetching,
    lastUpdated,
    data,
    itemId,
    favoriteAt,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchRequestClick: (text) => {
      dispatch(requestData(text))
    },
    onFavoriteClick: (id) => {
      dispatch(registFavo(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
