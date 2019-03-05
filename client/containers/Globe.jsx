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
    this.mapZoom = ''
    this.updateZoom = this.updateZoom.bind(this)
  }


  markerClick = (props) => {
    location.href=`/dashboard/${props.id}`
  }

  updateZoom = (depth) => {
    switch (depth) {
      case '1':
        return this.mapZoom = 7
      case '2':
        return this.mapZoom = 8
      case '2':
        return this.mapZoom = 9
      case '3':
        return this.mapZoom = 10
      default:
        return this.mapZoom = 10
    }
  }



  render() {
    return (
      <React.Fragment>
        {this.props.loadLocationById.length > 0 &&
        this.updateZoom(this.props.loadLocationById[0].depth) &&
        <Map
          zoomControl={false}
          mapTypeControl={true}
          scaleControl={true}
          streetViewControl={false}
          panControl={true}
          rotateControl={false}
          fullscreenControl={false}
          google={this.props.google}
          zoom={this.mapZoom}
          style={mapStyles}
          initialCenter={{
          lat: -36.927863,
          lng: 175.624601
          }}>
          {this.props.children &&
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

