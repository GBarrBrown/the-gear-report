import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'

const mapStyles = {
  width: '50%',
  height: '40%'
};



export class Globe extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        {this.props.loadLocationById &&
        <Map
          zoomControl={false}
          mapTypeControl={true}
          scaleControl={true}
          streetViewControl={false}
          panControl={true}
          rotateControl={false}
          fullscreenControl={false}
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{
          lat: -36.927863,
          lng: 175.624601
          }}>
          <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: -37.066696, lng: 175.557862}} />
          </Map>

      }
      </React.Fragment>
    );
  }
}

function mapStateToProps({loadLocationById, children}) {
  return {
  loadLocationById,
  children
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyCRxmSZK32nQHfg32jz1btIxI9gvZpFsLU'
})(Globe));

