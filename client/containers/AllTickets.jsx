import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddTicketButton from '../components/AddTicketButton'
import MaterialTable from 'material-table'

import {getAllTickets} from '../api/local/tickets'

export class AllTickets extends React.Component {

  componentDidMount() {
    this.props.getAllTickets()
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <div className='tickets-container'>
      {this.props.allTickets[0] &&
        <MaterialTable className='tickets-table' 
          columns={[
            { title: 'Title', field: 'title', filtering: false, },
            { title: 'Severity', field: 'severity', type: 'numeric', },
            { title: 'Sponsored', field: 'has_grant', type: 'boolean' },
            { title: 'Resolved', field: 'resolved', type: 'boolean' },
            { title: 'Created By', field: 'createdBy'},
            { title: 'Date Created', field: 'created_at', type: 'date', filtering: false,},
            { title: 'Last Updated', field: 'updated_at', type: 'numeric', filtering: false,},
          ]}
          styles={{
            width: '100%'
          }}
          data={this.props.allTickets}
          title="All Tickets For New Zealand"
          options={{
            filtering: true,
          }}
          actions={[
            {
              icon: 'more_horiz',
              tooltip: 'More Info',
              onClick: (event, rowData) => {
                location.href=`/tickets/ticketId/${rowData.id}`
              },
            },
          ]}
        />
      }
       {/* {isLoggedIn.user ? 
          <a className='action-button' href="/tickets/add"> 
            <AddTicketButton /> 
          </a>
        : <div className='action-button disabled'> 
            <AddTicketButton /> 
          </div>} */}
      </div>
    )
  }
}

function mapStateToProps({ allTickets, isLoggedIn }){
  return {
    allTickets,
    isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAllTickets}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)