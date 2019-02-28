import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input';
import { bindActionCreators } from 'redux';

import {addTicket} from '../fire/tickets'

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

  ranges = [
    {
      value: '1',
      label: '1 Mild',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
    },
  ];

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSumbit = () => {
    let payload = {title: this.state.title}
    this.props.addTicket(payload)
  };

  render() {
    return (
      <div className='add-ticket-container'>
        <form onSubmit={this.handleSubmit} method="post">
          <Input
          placeholder="Title"
          inputProps={{
            'aria-label': 'title',
          }}
          />
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