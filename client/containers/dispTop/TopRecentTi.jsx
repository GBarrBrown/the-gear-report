import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Typography from '@material-ui/core/Typography';


import MediaCard from './Card'

import {getTicketsByLocation} from '../../api/local/tickets'

var count = 0
class TopRecentTi extends React.Component {

  componentWillReceiveProps() {
    
    // if (typeof this.props.currentLocation === 'number' && this.props.ticketsByLocation < 1 && count < 20) {
    //   count += 1
    //   this.props.getTicketsByLocation(this.props.currentLocation)
    // }
  }

  render() {
      
    return (
      <div className="topRecentTi">
        <div className="hr-top"> </div>
        <div className="cards-header">
          <Typography variant="h5"> Recent Tickets </Typography>
        </div>
        <div className="hr-bottom"> </div>
       
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
