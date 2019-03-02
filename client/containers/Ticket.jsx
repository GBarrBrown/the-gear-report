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
            <div>
                <h3>Ticket</h3>
                <div>
                    {/* {this.props.ticket.name} */}
                </div>

            
            </div>
        )
    }
}


function mapStateToProps(){
    return{}
}

function mapDispatchToProps(dispatch){
    return{
        getCurrentTicketById: id => dispatch(getCurrentTicketById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)