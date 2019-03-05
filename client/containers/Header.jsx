
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Menu, MenuItem} from '@material-ui/core';


export class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      auth: false,
      anchorEl: null,
    };
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render(){
  
    const { auth, anchorEl } = this.state;
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
        <a href="/about">
          <Button color="inherit">
            About
          </Button>
        </a>

        
        {auth.isAuthenticated ? 
          ( <div className="header-items-login">
              <img src={auth.user.picture} alt="Profile pic"/>
            </div>
          ) : 
          <a href="/login">
            <Button color="inherit" >
              Login
            </Button>
          </a>}
            
            
       
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps)(Header)