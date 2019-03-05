import React from 'react'
import Typography from '@material-ui/core/Typography';

class TopContribs extends React.Component {

  render() {
    return (
      <div className="topContribs">
        <div className="hr-top"> </div>
        <div className="cards-header">
        <Typography variant="h5"> Top Contributors </Typography>
        </div>
        <div className="hr-bottom"> </div>
      
      </div>
      )
  }
}

export default TopContribs
