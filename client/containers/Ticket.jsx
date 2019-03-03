import React from 'react'
import { connect } from 'react-redux'

import {getCurrentTicketById} from '../api/local/tickets'


class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        var ticketId = this.props.match.params.ticketId
        // console.log(ticketId)
        this.setState({ticketId: ticketId})
        this.props.getCurrentTicketById(ticketId)

    }

    render() {
        return (
            <div className="ticketComponent">
                <h3>Ticket</h3>
                <div>
                    <h2>{this.props.currentTicket.title}</h2><br />
                    <h3>Description:</h3>
                    <p>{this.props.currentTicket.description}</p><br />
                    <h3>Severity: {this.props.currentTicket.severity}</h3><br />
                    <h3>Created: {this.props.currentTicket.created_at}</h3><br />
                    <h3>Grant Status: {(this.props.currentTicket.has_grant === 'true') ? 'Funded' : 'Not Funded'}</h3>
                </div>

            
            </div>
        )
    }
}


function mapStateToProps({currentTicket}){
    return{currentTicket}
}

function mapDispatchToProps(dispatch){
    return{
        getCurrentTicketById: id => dispatch(getCurrentTicketById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)