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
    this.zoom = ''
    this.updateZoom = this.updateZoom.bind(this)
  }


  markerClick = (props) => {
    location.href=`/dashboard/${props.id}`
  }

  renderCondition(depth) {
    switch(type) {
      case '2':
      return zoom=9
      default:
      return zoom=14
    }
  }

  updateZoom = (depth) => {
    switch (depth) {
      case '1':
        return this.zoom = 7
      case '2':
        return this.zoom = 8
      case '2':
        return this.zoom = 9
      case '3':
        return this.zoom = 10
      default:
        return this.zoom = 10
    }
  }



  render() {
    return (
      <React.Fragment>
        {this.props.loadLocationById &&
        this.updateZoom(this.props.loadLocationById[0].depth) &&
        console.log(this.zoom) &&
        <Map
          mapTypeControl={true}
          scaleControl={true}
          streetViewControl={false}
          panControl={true}
          rotateControl={false}
          fullscreenControl={false}
          google={this.props.google}
          zoom={this.zoom}
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

