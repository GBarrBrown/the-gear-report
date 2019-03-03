import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: '100',

    },
    media: {
    //   height: 
    },
  };

  function eventHandler(id) {
    location.href=`/tickets/ticketId/${id}`
  }

  
  function MediaCard(props) {
    const { classes } = props;

    var text = props.description
    var count = 65

    var cutDescription = text.slice(0, count) + (text.length > count ? "..." : "");
    
    return (
        <div className="topRecentTi"
        >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography component="p">
              {cutDescription}
            </Typography>
            <br />
            <Typography>
              Crag: {props.crag}
            </Typography>
              
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={event => { eventHandler(props.id) }}>
            View Ticket
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
    );
  }
  
  MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MediaCard);