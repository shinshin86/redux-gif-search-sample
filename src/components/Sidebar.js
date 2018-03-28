import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = {
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  sidebarButton: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    textDecoration: 'none',
    color: '#FFFFFF',
  }
}

const Sidebar = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Menu</h1>
      <p>
        <Button className={classes.sidebarButton}>
          page 1
        </Button>
      </p>
      <p>
        <Button className={classes.sidebarButton}>
          page 2
        </Button>
      </p>
    </div>
  )
}

export default withStyles(styles)(Sidebar)

