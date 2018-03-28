import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import GifSearch from '../containers/GifSearch'
import { withStyles } from 'material-ui/styles'

const styles = {
  main: {
    flex: 1,
    minHeight: '100vh',
  },
  side: {
    //width: '10vw',
    width: '150px',
    position: 'fixed',
    minHeight: '100vh',
    top: 10,
    backgroundColor: '#a094b7'
  },
  contentsArea: {
    position: 'fixed',
    top: 10,
    // left: '10vw',
    left: '158px',
    bottom: 0,
    maxHeight: '100vh',
    overflowY: 'auto',
    width: '100%'
  },
  content: {
    marginLeft: 20,
  }
}

const App = ({ classes }) => (
  <div>
    <div className={classes.main}>
      <div className={classes.side}>
        <Sidebar />
      </div>
      <div className={classes.contentsArea}>
        <Header />
        <div className={classes.content}>
          Favorite Items
        </div>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(App)
