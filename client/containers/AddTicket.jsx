import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input';

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

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    return (
      <div className='add-ticket-container'>
        <form onSubmit={this.handleSubmit} method="post">
          <Input
          placeholder="Name"
          inputProps={{
            'aria-label': 'title',
          }}
          />
        </form>
        
      </div>
    )
  }
}

function mapStateToProps({ currentTicket }){
  return { currentTicket }
}

export default connect(mapStateToProps)(AddTicket)