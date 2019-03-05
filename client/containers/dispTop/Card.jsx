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

  function eventHandler(viewId) { 
    viewId ?
    location.href=`/tickets/ticketId/${viewId}`
    : location.href=`/tickets/`
  }

  
  function MediaCard(props) {
    const { classes } = props;

    var text = props.description
    var severity = props.severity
    var count = 37
    var cutDescription = text.slice(0, count) + (text.length > count ? "..." : "");
    var title = props.title
    var titleCount = 22
    var cutTitle = title.slice(0, titleCount) + (title.length > titleCount ? "..." : "");
    
    return (
        <div className={`${props.classKey} mediacard-width`}>
      <Card className={classes.card}>
        <CardActionArea>
          <div onClick={event => { eventHandler(props.id) }}>
          <CardContent>
              <Typography variant="overline"className={classes.title} color="textSecondary" gutterBottom>
              Crag
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {cutTitle}
            </Typography>
            <Typography component="subtitle1">
              Description: 
              <br/>{cutDescription}
            </Typography>
            <br />
            <Typography className={classes.pos}variant="subtitle2" color="textSecondary">
              Severity: {severity}
            </Typography>

          </CardContent>
          </div>
        </CardActionArea>
        {/*4<CardActions>
          <Button size="small" color="primary" onClick={event => { eventHandler(props.id) }}>
            View Ticket
          </Button>
          <Button size="small" color="primary" onClick={event => { eventHandler() }}>
            View All Tickets
          </Button>
        </CardActions> */}
      </Card>
      </div>
    );
  }
  
  MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MediaCard);