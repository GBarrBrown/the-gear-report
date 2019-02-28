import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {addTicket} from '../fire/tickets'

const ranges = [
  {
    value: '1'
  },
  {
    value: '2'
  },
  {
    value: '3'
  },
  {
    value: '4'
  },
  {
    value: '5'
  },
];

export class AddTicket extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      severity: '',
      user: ''//TODO user should be from this.props
    };
  }

 

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSumbit = () => {
    let payload = {title: this.state.title}
    this.props.addTicket(payload)
  };

  render() {
    return (
      <div className='add-ticket-container'>
        <form onSubmit={this.handleSubmit}>
          
          <Input placeholder="Title" onChange={this.handleChange}/>

          <br/>
          <TextField
            select
            label="Severity"
            value={this.state.severity}
            onChange={this.handleChange}
            inputProps={{
              name: 'severity'
            }}
            >
            {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
          </TextField>
            
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