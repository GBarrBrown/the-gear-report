import React from 'react'
import { connect } from 'react-redux'

import ActionStack from './ActionStack'

export class AllTickets extends React.Component {


  render() {
    return (
      <div className='tickets-container'>
        <h1>Tickets</h1>
        <div className='tickets-table'>
          <div className='table-header'>
            sortby header
          </div>
          <div>
            map through info here
          </div>

        </div>
        <div className='sidebar'>
          <div className="keys-container">
            <h4>import keys component here</h4>
          </div>
          <div className='action-bar'>
            <ActionStack />
          </div>
        </div>
       
      </div>
    )
  }
}

function mapStateToProps({ allTickets }){
  return {
    allTickets
  }
}

export default connect(mapStateToProps)(AllTickets)