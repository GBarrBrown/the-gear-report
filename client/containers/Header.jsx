
import React, { Component } from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      auth: true,
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
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className='header-container header'>
        <div className={classes.root}>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Button component={Link} to='/' color="inherit">Home</Button>
              
              <Button 
                  color="default"
                  aria-owns={open ? 'menu-appbar' : undefined}
                  // aria-haspopup="true"
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
                      className={classes.grow}
                    >
                      <a href="/tickets"><MenuItem onClick={this.handleClose}>View tickets</MenuItem></a>
                      <a href="/tickets/add"><MenuItem onClick={this.handleClose}>Add ticket</MenuItem></a>
                    </Menu>
              <Button component={Link} to='/about'  color="inherit">About</Button>
              <Button  component={Link} to='/login' color="inherit" >Login</Button>
              {/* {auth.isAuthenticated ? 
                ( <div className="header-items-login">
                    <h3>{auth.user.name}</h3>
                    <img src={auth.user.picture} alt="Profile pic"/>
                  </div>
                ) : 
                (
                  <a href="/login">
                  <div className="header-items-login">
                    Login {auth.errorMessage}
                  </div>
                  </a>
                ) */}
              
            </Toolbar>
          </AppBar>
        </Router>
          
        </div>
        
      </div>
      



    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)