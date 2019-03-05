import React from 'react'
import Typography from '@material-ui/core/Typography';

class ResolvedTickets extends React.Component {

  render() {
    return (
      <div className="resolvedTickets">
        <div className="hr-top"> </div>
        <div className="cards-header">
          <Typography variant="h5"> Resolved Tickets </Typography>
        </div>
        <div className="hr-bottom"> </div>
      </div>
    )
  }
}

export default ResolvedTickets
