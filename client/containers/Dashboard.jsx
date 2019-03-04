import React from 'react'
import { connect } from 'react-redux'

import Directory from './Directory'
import TopDisp from './dispTop/TopDisplay'
import Globe from './Globe'

import {updateCurrentLocation} from  '../actions/locations'
import {getLocationsByParent} from '../api/local/locations'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.updateCurrentLocation(this.props.match.params.id)
        
    }

    componentDidUpdate() {
        this.props.getLocationsByParent(this.props.currentLocation)   
    }

    render() {
        return (
            <div className="dashboard-container">
              <Directory />
              <div className="dashboard">Dashboard</div>
              <TopDisp />
              <Globe />
            </div>
        )
    }
}

function mapStateToProps({ currentLocation, auth }) {
    return { currentLocation, auth }
}

function mapDispatchToProps(dispatch) {
    return { 
        getLocationsByParent: parentId => dispatch(getLocationsByParent(parentId)),
        updateCurrentLocation: id => dispatch(updateCurrentLocation(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)