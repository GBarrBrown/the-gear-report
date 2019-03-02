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
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            {
              title: 'Birth Year',
              field: 'birthYear',
              type: 'numeric',
              filtering: false,
            },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          ]}
          title="Closing Filtering For BirthYear"
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