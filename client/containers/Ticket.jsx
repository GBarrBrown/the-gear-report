import React from 'react'
import { connect } from 'react-redux'

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

      var apiRetrysRemaining = 10;
      this.setState({apiRetrysRemaining: apiRetrysRemaining})     //adds apiRetrys to local state

  }
  componentWillReceiveProps() {
    // Allows for 10 retrys to the local api for ticket data, otherwise will stop calling.
    (this.state.apiRetrysRemaining > 0
      ?((typeof this.props.ticketLocations[0] === 'undefined') && this.props.getTicketLocationsById(this.state.ticketId))
      : null
    ) 

    this.setState({apiRetrysRemaining: this.state.apiRetrysRemaining-1})
  }

  render() {
    return (
      <div className="ticketComponent">

        {this.props.currentTicket ? (
          <div>
            <div>
              <h2>{this.props.currentTicket.title}</h2><br />
              <h3>Description:</h3>
              <p>{this.props.currentTicket.description}</p><br />
              <h3>Severity: {this.props.currentTicket.severity}</h3><br />
              <h3>Created: {this.props.currentTicket.created_at}</h3><br />
              <h3>Grant Status: {(this.props.currentTicket.has_grant) ? 'Funded' : 'Not Funded'}</h3>
            </div>
            <div className="actionStack">
              <ActionStack />
            </div>
            <div className="ticketInfoCard">
              <TicketInfoCard ticketLocations={this.props.ticketLocations}/>
            </div>
          </div>) : <h2>No Ticket Found Matching That ID</h2>
        }
      <button onClick={() => {console.log('button clicked - getTicketCreator'), this.props.getTicketCreator(this.state.ticketId)}}>Click Me To Get Ticket Creator</button>
      </div>
    )
  }
}


function mapStateToProps({currentTicket, ticketLocations}){
  return{currentTicket, ticketLocations}
}

function mapDispatchToProps(dispatch){
  return{
    getCurrentTicketById: id => dispatch(getCurrentTicketById(id)),
    getTicketLocationsById: id => dispatch(getTicketLocationsById(id)),
    getTicketCreator: id => dispatch(getTicketCreator(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)