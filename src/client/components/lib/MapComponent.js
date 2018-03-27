import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div className="google-marker">{ text }</div>;

 class MapComponent extends Component {

render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ 9 }>
          <AnyReactComponent
            lat={ this.props.lat}
            lng={ this.props.lon}
            text={ '🚌' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}


export default MapComponent
