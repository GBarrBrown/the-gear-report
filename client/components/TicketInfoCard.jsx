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
    console.log('.......',this.props.ticketLocations)

    return (
      <Card >
        <CardContent>
          {/* {typeof this.props.ticketLocations != 'undefined' && console.log()} */}
          {/* <Typography variant="h5"> */}
          <div>
            <Typography variant="h4">
              Ticket Location Info
            </Typography>
            {this.props.ticketLocations.map((place, i) => {  
              var type = place.type.charAt(0).toUpperCase() + place.type.slice(1) // capitalize first letter of place type
              return (
                <div>
                  {i < this.props.ticketLocations.length-1 
                  ? <Typography> <strong>{type} - </strong>{place.name}</Typography>
                  : <Typography> <strong>{type} - </strong><em>{place.name}</em></Typography>
                }
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
        {(typeof this.props.ticketLocations[0] === 'undefined'
        ? null 
        :<Button size="small" onClick={() => location.href=`/${this.props.ticketLocations[this.props.ticketLocations.length-1].loc_id}`}>Go To '{(this.props.ticketLocations[this.props.ticketLocations.length-1].name)}'</Button>
        )}

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