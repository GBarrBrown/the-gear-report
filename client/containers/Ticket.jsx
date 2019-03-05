import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';

import TicketInfoCard from '../components/TicketInfoCard'

import ActionStack from './ActionStack'

import {getCurrentTicketById, getTicketLocationsById, getTicketCreator} from '../api/local/tickets'


class Ticket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
      var ticketId = this.props.match.params.ticketId
      this.setState({ticketId: ticketId})       //adds ticketId to local state
      this.props.getCurrentTicketById(ticketId)

      // increase apiRetrysRemaining stops inifinite loops when looking for tickets that dont exist
      var apiRetrysRemaining = 10;
      this.setState({apiRetrysRemaining: apiRetrysRemaining});     //adds apiRetrys to local state

  }

  componentWillReceiveProps() {
    // Allows for 10 retrys to the local api for ticket data, otherwise will stop calling.
    (this.state.apiRetrysRemaining > 0
      ? ((typeof this.props.ticketLocations[0] === 'undefined') && this.props.getTicketLocationsById(this.state.ticketId))
      : null
    );
    
    // gets the ticketCreator if there not already done & if a user_id on currentTicket is supplied
    // ((typeof this.props.ticketCreator.name === 'undefined') && (typeof this.props.currentTicket !== 'null')
    //   ? ((typeof this.props.currentTicket.user_id !== 'undefined') && this.props.getTicketCreator(this.props.currentTicket.user_id))
    //   : null
    // );
    
    (this.state.apiRetrysRemaining > 0 && this.setState({apiRetrysRemaining: this.state.apiRetrysRemaining-1}));
  }

  render() {
    return (
      <div className="ticketComponent">

        {(this.props.currentTicket 
          ? (
            <div className="ticketFlexContainer">
              <div>
                <Typography variant="h3">{this.props.currentTicket.title}</Typography>
                <br />
                <Typography variant="h5"><strong>Description: </strong></Typography>
                <Typography variant="h5">{this.props.currentTicket.description}</Typography>
                <br />
                <Typography variant="h5"><strong>Severity - </strong>{this.props.currentTicket.severity}</Typography>
                <br />
                <Typography variant="h5"><strong>Created - </strong>{this.props.currentTicket.created_at}</Typography>
                <br />
                <Typography variant="h5"><strong>Grant Status - </strong>{(this.props.currentTicket.has_grant) ? 'Funded' : 'Not Funded'}</Typography>
                <br />
                <Typography variant="h5"><strong>Logged By - </strong>{this.props.currentTicket.name}</Typography>
                <br />
              </div>
              <div className="ticketInfoCard">
                <TicketInfoCard ticketLocations={this.props.ticketLocations}/>
              </div>
              <div className="actionStack">
                <ActionStack />
              </div>

            </div>
          )
          : <Typography variant="h2">No Ticket Found Matching That ID</Typography>
          )
        }

      </div>
    )
  }
}

function mapStateToProps({currentTicket, ticketLocations, ticketCreator}){
  return{currentTicket, ticketLocations, ticketCreator}
}

function mapDispatchToProps(dispatch){
  return{
    getCurrentTicketById: id => dispatch(getCurrentTicketById(id)),
    getTicketLocationsById: id => dispatch(getTicketLocationsById(id)),
    getTicketCreator: id => dispatch(getTicketCreator(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)