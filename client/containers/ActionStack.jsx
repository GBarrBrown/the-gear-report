import React, { Component } from 'react'
import { connect } from 'react-redux'


import AddTicketButton from '../components/AddTicketButton';
import EditTicketButton from '../components/EditTicketButton';
import ResolveTicketButton from '../components/ResolveTicketButton';

export class ActionStack extends Component {
  render() {
    return (
      <div className='action-stack'>
      
        <a className='action-button' href="/tickets/add"> <AddTicketButton /> </a>
        <a className='action-button' href="/tickets/:id/edit"> <EditTicketButton /> </a>  
        <a className='action-button' href="/tickets/:id/resolve"> <ResolveTicketButton /> </a>
        
      </div>
    )
  }
}

function mapStateToProps({ isAuth }){
  return {
    isAuth
  }
}

export default connect(mapStateToProps)(ActionStack )