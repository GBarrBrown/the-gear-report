import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {TextField, MenuItem, Button, FormControl} from '@material-ui/core';

import {islandRanges, severityRanges } from '../helper-functions/allTickets'
import { addTicket, getIslandByParent, getRegionByParent, getAreaByParent, getCragByParent } from '../api/local/form'

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

  onSelect = type => {
    console.log('selected:', type)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    let parentId = event.target.value
    switch (event.target.name){
      case 'island':
        return this.props.getRegionByParent(parentId)
      case 'region':
        return this.props.getAreaByParent(parentId)
      case 'area':
        return this.props.getCragByParent(parentId)
      case 'crag':
        return this.props.getCragByParent(parentId)
    }
  };

  handleSumbit = (e) => {
    e.preventDefault()
    const {user, title, description, severity, island, region, area, crag, wall, route} = this.state;
    let newTicket = {
      user,
      title,
      description,
      severity,
      island,
      region,
      area,
      crag,
      wall,
      route,
    }
    console.log(newTicket)
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
            {dropdownArr.region && dropdownArr.region.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}
          
          {this.state.region && <TextField
            select
            label={dropdownArr.area.type}
            value={this.state.area}
            onChange={this.handleChange}
            inputProps={{
              name: 'area'
            }}
            >
            {dropdownArr.area && dropdownArr.area.map(option => (
              
                <MenuItem key={option.id} value={option.id }>
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
            {dropdownArr.crag && dropdownArr.crag.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>}

        </FormControl>

        
        <div>
          <Button  
            onClick={this.handleSubmit}
            variant="contained" 
            size="small"
            type="submit" >
              Create ticket
          </Button>
        
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
  return bindActionCreators({addTicket, getIslandByParent, getRegionByParent, getAreaByParent, getCragByParent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket)