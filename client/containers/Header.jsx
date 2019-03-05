import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {Button, Menu, MenuItem} from '@material-ui/core';

import { toggleLogin, toggleLogout } from '../actions/auth/login'

export class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      login: false,
      anchorEl: null,
    };
  }

  handleLogin = () => {
    this.props.toggleLogin()
  } 
 
  handleLogout = () => {
    this.props.toggleLogout()
  } 

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render(){
    const { isLoggedIn } = this.props
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
     
      <div className='header-container header'>
        <a href="/">
          <Button color="inherit">
            Home
          </Button>
        </a>
        
        <Button 
          color="default"
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
        >
          Tickets
        </Button>
        
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <a className='menu-ticket-link' href="/tickets"><MenuItem onClick={this.handleClose}>View tickets</MenuItem></a>
          <a className='menu-ticket-link' href="/tickets/add"><MenuItem onClick={this.handleClose}>Add ticket</MenuItem></a>
        </Menu>
        <a href="https://kwf.co.nz/">
          <Button color="inherit">
            About
          </Button>
        </a>
        
        {isLoggedIn.user ? 
          ( <div className="header-items-login">
              <Button color="inherit" onClick={this.handleLogout}>
                Logout
              </Button>
              <img src={isLoggedIn.user.picture}/>
            </div>
          ) : 
            <Button color="inherit" onClick={this.handleLogin}>
              Login
            </Button>
          }
      </div>
    )
  }
}

function mapStateToProps({isLoggedIn}){
  return {isLoggedIn}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ toggleLogin, toggleLogout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)