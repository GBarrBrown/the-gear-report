import React from 'react'
import { connect } from 'react-redux'

import Directory from './Directory'
import TopDisp from './dispTop/TopDisplay'
import Globe from './Globe'
import Info from './Info'

import {updateCurrentLocation} from  '../actions/locations'
import {getLocationsByParent} from '../api/local/locations'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.renderCondition = this.renderCondition.bind(this)
    }

    componentDidMount() {
        this.props.updateCurrentLocation(this.props.match.params.id)
        
    }

    componentDidUpdate() {
        this.props.getLocationsByParent(this.props.currentLocation)   
    }

    renderCondition(type) {
        console.log(type);
        switch(type) {
          case 'crag':
            return <Info props={this.props}/>
          case 'wall':
            return <Info props={this.props}/>
          case 'route':
            return <Info props={this.props}/>
          case 'cliff':
            return <Info props={this.props}/>
          default:
            return <Globe props={this.props}/>
        }
      }

    

    render() {
        return (
            <div className="dashboard-container">
              <Directory />
              <div className="dashboard"></div>
              <TopDisp />
              <div className='globe'>
              {this.props.loadLocationById.length > 0 && 
                this.props.loadParentByCurrent.length > 0 && 
                this.renderCondition(this.props.loadLocationById[0].type)} 
              </div>
            </div>
        )
    }
}

function mapStateToProps({ currentLocation, auth, loadLocationById, loadParentByCurrent }) {
    return { currentLocation, auth, loadLocationById, loadParentByCurrent }
}

function mapDispatchToProps(dispatch) {
    return { 
        getLocationsByParent: parentId => dispatch(getLocationsByParent(parentId)),
        updateCurrentLocation: id => dispatch(updateCurrentLocation(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)