import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'

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
  },
  textIcon: {
    verticalAlign: 'middle',
  },
  linkText: {
    textDecoration: 'none',
    color: 'black',
  },
}

const Sidebar = ({ classes }) => {
  return (
    <div>
      <h1 className={classes.title}>Menu</h1>
      <p>
        <Button className={classes.sidebarButton}>
          <Link to='/' className={classes.linkText}>
            <i className='material-icons' style={styles.textIcon}>home</i>
            <span className={classes.textIcon}>Home</span>
          </Link>
        </Button>
        <Button className={classes.sidebarButton}>
          <Link to='/favorite' className={classes.linkText}>
            <i className="material-icons" style={styles.textIcon}>favorite</i>
            <span className={classes.textIcon}>Favorite</span>
          </Link>
        </Button>
      </p>
    </div>
  )
}

export default withStyles(styles)(Sidebar)

