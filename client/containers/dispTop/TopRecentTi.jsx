import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MediaCard from './Card'

import {getTicketsByLocation} from '../../api/local/tickets'

export class TopRecentTi extends React.Component {

  render() {
      
    return (
      <div className="topRecentTi">
        <div className="cards-header">
          <p> Recent Tickets </p>
        </div>
       
        <div className="flex-cards">
          {this.props.ticketsByLocation.length > 0 &&
          <React.Fragment>
            
            {this.props.ticketsByLocation.slice(0, 5).map((ticket, i) => {
              return (
                <MediaCard 
                classKey={`topRecentTi${i}`} 
                title={ticket.title} 
                description={ticket.description} 
                id={ticket.id}
                severity={ticket.severity}
                />
              )
              
            })}
          </React.Fragment>
          }
        </div>
     
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
