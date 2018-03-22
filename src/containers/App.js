import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { requestData } from '../actions'
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
    width: 200,
  },
})

class App extends Component {
  state = {
    searchText: '',
  }

  handleChange = searchText => event => {
    this.setState({
      [searchText]: event.target.value,
    })
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.props.dispatch(requestData(this.state.searchText))
  }

  render() {
    const { data, isFetching, lastUpdated } = this.props
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
            <Button size="small" color="primary" onClick={this.handleClick}>
              <i className="material-icons">search</i>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p>
              {lastUpdated !== 0 && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}. </span>}
              {!isFetching && data.length !== 0 && (
                <button onClick={this.handleRefreshClick}>
                  Refresh
                </button>
              )}
            </p>
            {isFetching && data.length === 0 && <h2>Loading...</h2>}
            {!isFetching && data.length === 0 && <h2>Let's GIF Search!</h2>}
            {data.length > 0 && (
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <GifList data={data} />
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
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { gifSearch } = state
  const { isFetching, lastUpdated, data } = gifSearch || {
    isFetcing: false,
    data: [],
    lastUpdated: 0,
  }

  return {
    gifSearch,
    isFetching,
    lastUpdated,
    data
  }
}

export default connect(mapStateToProps)(App)
