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
          <div>
            <Typography variant="h4">
              Ticket Location Info
            </Typography>
            {this.props.ticketLocations.map((place, i) => {  
              var type = place.type.charAt(0).toUpperCase() + place.type.slice(1) // capitalize first letter of place type
              return (
                <div key={i}>
                  {i < this.props.ticketLocations.length-1 
                  ? <Typography key={'normal'+i}> <strong>{type} - </strong>{place.name}</Typography>
                  : <Typography key={'emphasis'+i}> <strong>{type} - </strong><em>{place.name}</em></Typography>
                }
                </div>
              )
            })}
          </div>
        </CardContent>

        <CardActions>
          {(typeof this.props.ticketLocations[0] === 'undefined'
          ? null 
          : <Button size="small" onClick={() => location.href=`/dashboard/${this.props.ticketLocations[this.props.ticketLocations.length-1].loc_id}`}>Go To '{(this.props.ticketLocations[this.props.ticketLocations.length-1].name)}'</Button>
          )}
        </CardActions>

      </Card>
    );
  }
}

function mapStateToProps({ticketLocations}){
  return {
    ticketLocations
  }
}

export default connect(mapStateToProps)(TicketInfoCard)