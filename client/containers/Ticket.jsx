import React from 'react'
import { connect } from 'react-redux'

import {getCurrentTicketById} from '../api/local/tickets'


class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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