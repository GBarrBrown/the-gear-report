import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MaterialTable from 'material-table'

export class TopContribs extends React.Component {

  render() {
    console.log(this.props.topContributors);
    return (
      <div className="topContribs">
        <div className="cards-header">
          <p> Top Contributors </p>
        </div>
       
        <div className="flex-cards">
        {this.props.topContributors.length > 0 &&
        <MaterialTable
          columns={[
            {
              title: 'Name',
              render: rowData => rowData.name,
            },
            {
              title: 'Score',
              field: 'successScore',
              render: rowData => {
                const score = rowData.num * 10
                const color = rowData.successScore > 40 ? '#4CAF50' : '#f44336'
                return (
                  <div style={{ width: '100%', backgroundColor: '#ddd', height: 20 }}>
                    <div
                      style={{
                        textAlign: 'left',
                        padding: 1,
                        color: 'white',
                        width: score,
                        backgroundColor: color,
                        height: 20,
                      }}
                    >
                      {score}
                    </div>
                  </div>
                )
              },
            },
          ]}
          data={this.props.topContributors}
          title="Top Contributors"
          />
        }
        </div>
     
      </div>
    )
  }
}

function mapStateToProps ({ticketsByLocation, currentLocation, loadLocationById, topContributors}) {
  return {
    ticketsByLocation,
    currentLocation,
    loadLocationById,
    topContributors
}
}   




export default connect(mapStateToProps)(TopContribs)

