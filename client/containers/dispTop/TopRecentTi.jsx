import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MediaCard from './Card'

import {getTicketsByLocation} from '../../api/local/tickets'



class TopRecentTi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillReceiveProps() {
        if (typeof this.props.currentLocation === 'string' && this.props.loadLocationById && this.props.ticketsByLocation.length < 1) {
            console.log('hit')
            this.props.getTicketsByLocation(this.props.currentLocation)
        }
    }

    render() {
     
        return (
            <div className="topRecentTi">
            {this.props.ticketsByLocation.length > 0 &&
            <React.Fragment>
                <h3>Most recent tickets for this area:</h3>

                {this.props.ticketsByLocation.slice(0, 5).map((ticket, i) => {
                    return <MediaCard classKey={`topRecentTi${i}`} title={ticket.title} description={ticket.description} id={ticket.id} />

                })}
            </React.Fragment>
            }
            </div>
            
        )
    }
}

function mapStateToProps ({ticketsByLocation, currentLocation, loadLocationById}) {
    return {
        ticketsByLocation,
        currentLocation,
        loadLocationById
    }
}   

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getTicketsByLocation}, dispatch)

}






export default connect(mapStateToProps, mapDispatchToProps)(TopRecentTi)
