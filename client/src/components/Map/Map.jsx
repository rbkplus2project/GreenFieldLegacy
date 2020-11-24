import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            showInfo: false,
            marker: {},
            place: {}
        }
    }
    onMarkerClick = (props, marker, e) => {
        console.log(props, marker, e)
        this.setState({
            marker,
            
        })
    }
    render() {
        console.log(this.props)
        return (
            <Map google={this.props.google}
                initialCenter={this.props.location ? { lat: this.props.location.latitude, lng: this.props.location.longitude } : { lat: 0, lng: 0 }}
                zoom={15}
                onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick} name={'current'} />
                {this.props.hotels.map((elem, i) => (<Marker onClick={this.onMarkerClick} key={elem.id} name={elem.name}
                    position={{ lat: elem.coordinate.lat, lng: elem.coordinate.lon }}
                    icon={{
                        url: 'hotel-icon-png.jpg',
                        anchor: new this.props.google.maps.Point(32, 32),
                        scaledSize: new this.props.google.maps.Size(50, 50)
                    }}
                     />))}
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