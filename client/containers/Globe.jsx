import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux'

const mapStyles = {
  width: '50%',
  height: '40%'
};

export class Globe extends Component {
  render() {
    return (
        
      <Map
        draggable={false}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRxmSZK32nQHfg32jz1btIxI9gvZpFsLU'
})(Globe);

