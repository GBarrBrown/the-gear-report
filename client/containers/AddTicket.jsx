import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {TextField, MenuItem, Button, FormControl} from '@material-ui/core';

import {islandRanges, severityRanges } from '../helper-functions/allTickets'
import { addTicket, getFirstByParent, getSecondByParent, getThirdByParent, getFourthByParent } from '../api/local/form'

export class AddTicket extends Component {
 state = {
    title: '',
    description: '',
    severity: '',
    island: '',
    firstDropdown: '',
    secondDropdown: '',
    thirdDropdown: '',
    fourthDropdown: '',
    fifthDropdown: '',
    route: '',
    user: 2 //TODO user should be from this.props
  };
  

  onSelect = type => {
    console.log('selected:', type)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    let parentId = event.target.value
    switch (event.target.name){
    case 'island':
      return this.props.getFirstByParent(parentId)
    case 'firstDropdown':
      return this.props.getSecondByParent(parentId)
    case 'secondDropdown':
      return this.props.getThirdByParent(parentId)
    case 'thirdDropdown':
      return this.props.getfourthDropdownByParent(parentId)
    case 'fourthDropdown':
      return this.props.getfifthDropdownByParent(parentId)
    case 'fifthDropdown':
    }
  };

  handleSumbit = (e) => {
    e.preventDefault()
    const {user, title, description, severity, firstDropdown, secondDropdown, thirdDropdown, fourthDropdown, fifthDropdown, sixthDropdown} = this.state;
    let newTicket = {
      user,
      title,
      description,
      severity,
      location: [firstDropdown,
      secondDropdown,
      thirdDropdown,
      fourthDropdown,
      fifthDropdown,
      sixthDropdown]
    }
    this.props.addTicket(newTicket)
  };

  render() {
    const { dropdownArr } = this.props
    return (
      <div className='content add-ticket-container'>
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
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
        
          {this.state.island && <TextField
            select
            label="Region"
            value={this.state.firstDropdown}
            onChange={this.handleChange}
            inputProps={{
              name: 'firstDropdown'
            }}
            >
            {dropdownArr.firstDropdown && dropdownArr.firstDropdown.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}
          
          {this.state.firstDropdown && <TextField
            select
            value={this.state.secondDropdown}
            onChange={this.handleChange}
            inputProps={{
              name: 'secondDropdown'
            }}
            >
            {dropdownArr.secondDropdown && dropdownArr.secondDropdown.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}
          
          {this.state.secondDropdown && <TextField
            select
            value={this.state.thirdDropdown}
            onChange={this.handleChange}
            inputProps={{
              name: 'thirdDropdown'
            }}
            >
            {dropdownArr.thirdDropdown && dropdownArr.thirdDropdown.map(option => (
              <MenuItem key={option.id} value={option.id }>
                {option.name}
              </MenuItem>
              ))}
          </TextField>}
          
          {this.state.thirdDropdown && <TextField
            select
            value={this.state.fourthDropdown}
            onChange={this.handleChange}
            inputProps={{
              name: 'fourthDropdown'
            }}
            >
            {dropdownArr.fourthDropdown && dropdownArr.fourthDropdown.map(option => (
                <MenuItem key={option.value} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}

        </FormControl>

        
        <div>
          {this.state.title && <Button  
            onClick={this.handleSubmit}
            variant="contained" 
            size="small"
            type="submit" >
              Create ticket
          </Button>}
        
        </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ user, dropdownArr }){
  return { user, dropdownArr }
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({addTicket, getFirstByParent, getSecondByParent, getThirdByParent, getFourthByParent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket)