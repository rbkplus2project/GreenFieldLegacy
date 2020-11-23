import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        console.log(this.props)
        return (
            
            <Map google={this.props.google} initialCenter={this.props.location? {lat: this.props.location.latitude, lng: this.props.location.longitude } : {lat: 0, lng: 0}} zoom={10}>
                {console.log(this)}
                <Marker onClick={this.onMarkerClick} name={'current'} />
                <InfoWindow onClick={this.onInfoWindowClose}>
                    <div>
                        <h1>hotel name here</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_KEY)
  })(MapContainer)