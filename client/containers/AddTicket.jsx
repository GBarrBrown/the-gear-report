import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {TextField, MenuItem, Button, FormControl} from '@material-ui/core';

import {islandRanges, severityRanges } from '../helper-functions/addTickets'
import { addTicket, getFirstByParent, getSecondByParent, getThirdByParent, getFourthByParent, getFifthByParent } from '../api/local/form'

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
    user: 2 //TODO user should be from this.props
  };
  

  onSelect = type => {
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
      return this.props.getFourthByParent(parentId)
    case 'fourthDropdown':
      return this.props.getFifthByParent(parentId)
    case 'fifthDropdown':
    }
  };

  handleSumbit = (e) => {
    e.preventDefault()
    const {user, title, description, severity, island, firstDropdown, secondDropdown, thirdDropdown, fourthDropdown, fifthDropdown} = this.state;
    let newTicket = {
      user,
      title,
      description,
      severity,
      location: [
        island,
        firstDropdown,
        secondDropdown,
        thirdDropdown,
        fourthDropdown,
        fifthDropdown
      ]
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
          required
          label="Title" 
          onChange={this.handleChange}
          inputProps={{
            name: 'title'
          }}/>
        
          <TextField 
          required
          label="Description" 
          onChange={this.handleChange}
          inputProps={{
              name: 'description'
            }}/>
         
          <TextField
            required
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
            required
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
            required
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
            required
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
            required
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
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}

        </FormControl>

        
        <div>
          {this.state.title && this.state.description && 
          this.state.secondDropdown && 
          this.state.severity &&
          <Button  
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
  return bindActionCreators({addTicket, getFirstByParent, getSecondByParent, getThirdByParent, getFourthByParent, getFifthByParent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket)