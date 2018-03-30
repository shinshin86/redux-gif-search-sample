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
  cardContent: {
    textAlign: "center",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  actions: {
    backgroundColor: "#E8EAF6"
  },
}

const FavoriteItem = ({ data, classes, }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={data.images.fixed_height.url} alt={data.title} />
          <Typography variant="headline" component="textSecondary">
            {data.title}
          </Typography>
          <Typography component="p">
            {data.slug}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary">
            <i className="material-icons">share</i>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

FavoriteItem.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavoriteItem)
