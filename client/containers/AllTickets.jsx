import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ActionStack from './ActionStack'
import MaterialTable from 'material-table'

import {getAllTickets} from '../api/local/tickets'

export class AllTickets extends React.Component {

  componentDidMount() {
    console.log('componendDidMount');
    this.props.getAllTickets()
  }

  render() {
    return (
      <div className='tickets-container'>
        <MaterialTable
          columns={[
            { title: 'Title', field: 'title', filtering: false, },
            { title: 'Severity', field: 'severity', type: 'numeric', },
            { title: 'Sponsored', field: 'has_grant', type: 'boolean' },
            { title: 'Created By', field: 'createdBy'},
            { title: 'Date Created', field: 'created_at', type: 'date', filtering: false,},
            { title: 'Last Updated', field: 'updated_at', type: 'numeric', filtering: false,},
            { title: 'Birth Year', field: 'birthYear', type: 'numeric', filtering: false, },
            { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
          },
          ]}
          data={[
            { crag_name:
              null,
              created_at:
              "2019-03-02 07:35:43",
              description:
              "20m past Arete Route on the left, rope is frayed and looks like it will fail soon",
              has_grant:
              'true',
              id:
              1,
              img:
              null,
              severity:
              4,
              title:
              "Worn cable at the Arete Route",
              updated_at:
              "2019-03-02 07:35:43",
              user_id:
              "1" },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          ]}
          title="All Tickets For New Zealand"
          options={{
            filtering: true,
          }}
        />
      </div>
    )
  }
}

function mapStateToProps({ allTickets }){
  return {
    allTickets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAllTickets}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)