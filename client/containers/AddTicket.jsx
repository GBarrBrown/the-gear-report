import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {TextField, MenuItem, Button, FormControl} from '@material-ui/core';

import {islandRanges, severityRanges, addTicket } from '../helper-functions/allTickets'

export class AddTicket extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      severity: '',
      island: '',
      region: '',
      area: '',
      crag: '',
      wall: '',
      route: '',
      user: ''//TODO user should be from this.props
    };
  }

  handleChange = event => {
    console.log(event.target.name, ':', event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSumbit = (e) => {
    e.preventDefault()
    let newTicket = {
      user: this.state.user,
      title: this.state.title,
      description: this.state.description,
      severity: this.state.severity,
      region: this.state.region,
      area: this.state.area,
      crag: this.state.crag,
      wall: this.state.wall,
      route: this.state.route,
    }
    console.log(newTicket)
    // this.props.addTicket(newTicket)
  };

  render() {
    return (
      <div className='body add-ticket-container'>
      <form onSubmit={this.handleSumbit}>
        <FormControl >
        
          <TextField 
          label="Title" 
          onChange={this.handleChange}
          inputProps={{
            name: 'title'
          }}/>
        
          <TextField 
          label="Description" 
          onChange={this.handleChange}
          inputProps={{
              name: 'description'
            }}/>
         
          <TextField
            select
            label="Severity"
            value={this.state.severity}
            onChange={this.handleChange}
            inputProps={{
              name: 'severity'
            }}
            >
            {severityRanges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
          
          <br/>
          
          <TextField
            select
            label="Island"
            value={this.state.island}
            onChange={this.handleChange}
            inputProps={{
              name: 'island'
            }}
            >
            {islandRanges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
        
          {this.state.island && <TextField
            select
            label="Region"
            value={this.state.region}
            onChange={this.handleChange}
            inputProps={{
              name: 'region'
            }}
            >
            {islandRanges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}
          
          {this.state.region && <TextField
            select
            label="Area"
            value={this.state.area}
            onChange={this.handleChange}
            inputProps={{
              name: 'area'
            }}
            >
            {islandRanges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}
          
          {this.state.area && <TextField
            select
            label="Crag"
            value={this.state.crag}
            onChange={this.handleChange}
            inputProps={{
              name: 'crag'
            }}
            >
            {islandRanges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}

        </FormControl>

        <div onClick={this.handleSubmit} >
          <Button  
            variant="contained" 
            size="small"
            type={"submit"} >
              Create ticket
          </Button>
        </div>
          
        </form>
      </div>
    )
  }
}

function mapStateToProps({ user }){
  return { user }
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({addTicket}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket)