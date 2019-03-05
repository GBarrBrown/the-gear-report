import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'

import {getMarkersByType} from '../api/local/locations'
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.3/node_modules/redux';

const mapStyles = {
  width: '50px',
  height: '40px'
};



export class Globe extends Component {
  constructor(props) {
    super(props)
    this.mapZoom = ''
    this.updateZoom = this.updateZoom.bind(this)
    this.markerClick = this.markerClick.bind(this)
  }


  markerClick = (props) => {
    location.href=`/dashboard/${props.id}`
  }

  updateZoom = (depth) => {
    switch (depth) {
      case '1':
        return this.mapZoom = 5.15
      case '2':
        return this.mapZoom = 5.75
      case '2':
        return this.mapZoom = 8.5
      case '3':
        return this.mapZoom = 8.4
      default:
        return this.mapZoom = 10
    }
  }
  
  componentWillUpdate() {
  }


  render() {
    return (
      <div className='globeContainer'>
        {this.props.loadLocationById.length > 0 &&
        this.updateZoom(this.props.loadLocationById[0].depth) &&
        <Map
          zoomControl={false}
          mapTypeControl={false}
          scaleControl={true}
          streetViewControl={false}
          panControl={true}
          rotateControl={false}
          fullscreenControl={false}
          google={this.props.google}
          zoom={this.mapZoom}
          style={mapStyles}
          initialCenter={{
          lat: this.props.loadLocationById[0].lat,
          lng: this.props.loadLocationById[0].long
          }}>
          {this.props.children &&
          this.props.loadLocationById[0].depth > 2 &&
          this.props.children.map(child => {
            return <Marker
            title={child.name}
            id = {child.id}
            name={child.name}
            position={{lat: child.lat, lng: child.long}} 
            onClick={this.markerClick}/>
          })
            }
          </Map>

      }
      </div>
    );
  }
}

function mapStateToProps({loadLocationById, children, loadParentByCurrent}) {
  return {
  loadLocationById,
  children,
  loadParentByCurrent
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getMarkersByType}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyCRxmSZK32nQHfg32jz1btIxI9gvZpFsLU'
})(Globe));

