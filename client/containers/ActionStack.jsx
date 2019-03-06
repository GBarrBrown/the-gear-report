import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import AddTicketButton from '../components/AddTicketButton';
import ResolveTicketButton from '../components/ResolveTicketButton';
import EditTicketButton from '../components/EditTicketButton';

import { resolveTicket } from '../api/local/tickets'

export class ActionStack extends Component {

  handleClick = () => {
    const id = this.props.currentTicket.id
    this.props.resolveTicket(id)
  }
  render() {
    const { isLoggedIn, currentTicket } = this.props
    return (
      <div className='action-stack'>
        {isLoggedIn.user ? 
          (<a className='action-button' href="/tickets/add"> 
            <AddTicketButton /> 
          </a>)
        : <div className='action-button disabled'> 
            <AddTicketButton /> 
          </div>}

        {isLoggedIn.user && 
        isLoggedIn.user.admin &&
        !currentTicket.resolved &&  
            <a className='action-button' onClick={() => this.handleClick()}> 
              <EditTicketButton /> 
            </a>}

        {isLoggedIn.user && 
        !isLoggedIn.user.admin &&
        !currentTicket.resolved &&   
          <div className='action-button disabled' > 
            <EditTicketButton /> 
          </div>}
        
        {isLoggedIn.user && 
        !isLoggedIn.user.admin &&
        currentTicket.resolved == 1 &&   
          <div className='action-button disabled' > 
            <ResolveTicketButton /> 
          </div>}
        
        {!isLoggedIn.user && 
        currentTicket.resolved == 1 &&   
          <div className='action-button disabled' > 
            <ResolveTicketButton /> 
          </div>}
        
        {!isLoggedIn.user && 
        currentTicket.resolved == 0 &&   
          <div className='action-button disabled' > 
            <EditTicketButton /> 
          </div>}
        
        {isLoggedIn.user && 
        currentTicket.resolved == 1 &&   
          <div className='action-button disabled' > 
            <ResolveTicketButton /> 
          </div>}
        
        
      </div>
    )
  }
}

function mapStateToProps({ isLoggedIn, currentTicket }){
  return {
    isLoggedIn, currentTicket 
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ resolveTicket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionStack)