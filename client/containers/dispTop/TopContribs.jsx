import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class TopContribs extends React.Component {

  render() {
      
    return (
      <div className="topContribs">
        <div className="cards-header">
          <p> Top Contributors </p>
        </div>
       
        <div className="flex-cards">
          
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




export default connect(mapStateToProps)(TopContribs)

