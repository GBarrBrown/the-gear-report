import React, { Component } from 'react';

import { connect } from 'react-redux'

//Material UI Card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class TicketInfoCard extends Component {
  constructor(){
    super()
  }



  render() {
    return (
      <Card >
        <CardContent>
          {/* {typeof this.props.ticketLocations != 'undefined' && console.log()} */}
          {/* <Typography variant="h5"> */}
          <div>
            <Typography variant="h2">
              {this.props.test}
            </Typography>
            {this.props.ticketLocations.map((place) => {  
              var type = place.type.charAt(0).toUpperCase() + place.type.slice(1) // capitalize first letter of place type
              return (
                <div>
                  <Typography> <strong>{type} - </strong>{place.name}</Typography>
                </div>
              )
            })}
            {console.log(this.props.ticketLocations)}
          </div>
          {/* </Typography> */}


          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps({ticketLocations}){
  return {
    test: 'hello', 
    ticketLocations
  }
}

export default connect(mapStateToProps)(TicketInfoCard)