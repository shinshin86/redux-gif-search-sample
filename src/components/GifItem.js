import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = {
  card: {
    maxWidth: 345,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
}

function GifItem(props){
  const { data, classes } = props
  return (
    <div>
      <Card>
        <CardContent className={classes.card}>
          <img src={data.images.fixed_height.url} alt={data.title} />
          <Typography variant="headline" component="textSecondary">
            {data.title}
          </Typography>
          <Typography component="p">
            {data.slug}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <i className="material-icons">share</i>
          </Button>
          <Button size="small" color="primary">
            <i className="material-icons">favorite</i>
          </Button>
      </CardActions>
      </Card>
    </div>
  )
}

GifItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GifItem)
