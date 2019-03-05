import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTicketButton from '../components/AddTicketButton';
import ResolveTicketButton from '../components/ResolveTicketButton';

export class ActionStack extends Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <div className='action-stack'>
        {isLoggedIn.user ? 
          <a className='action-button' href="/tickets/add"> 
            <AddTicketButton /> 
          </a>
        : <div className='action-button disabled'> 
            <AddTicketButton /> 
          </div>}
        {isLoggedIn.user && isLoggedIn.user.admin ?  
            <a className='action-button' href="/tickets/:id/resolve"> 
              <ResolveTicketButton /> 
            </a>
        : <div className='action-button disabled' > 
            <ResolveTicketButton /> 
          </div>
        }
        
      </div>
    )
  }
}

function mapStateToProps({ isLoggedIn }){
  return {
    isLoggedIn
  }
}

export default connect(mapStateToProps)(ActionStack)