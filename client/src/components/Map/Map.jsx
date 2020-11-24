import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './Map.css';

export class MapContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            showInfo: false,
            marker: {key2: 0},
            place: {}
        }
    }
    onMapClicked = (a, s,d) => {
        this.setState({
            showInfo: false
        })
    }
    onMarkerClick = (props, marker, e) => {
        console.log(props, marker, e)
            this.setState({
                marker,
                showInfo: true,
            })
    }
    render() {
        return (
            <div style={{height:"90vh", width:"90vw", position:"relative", marginLeft:"5vw", marginBottom:"5vh" }}>
            <Map google={this.props.google}
                initialCenter={this.props.location ? { lat: this.props.location.latitude, lng: this.props.location.longitude } : { lat: 0, lng: 0 }}
                zoom={15}
                onClick={this.onMapClicked}>
                <Marker name={'current'} />
                {this.props.hotels.map((elem, i) => (<Marker onClick={this.onMarkerClick} key={elem.id} key2={i} name={elem.name}
                    position={{ lat: elem.coordinate.lat, lng: elem.coordinate.lon }}
                    icon={{
                        url: 'hotel-icon-png.jpg',
                        anchor: new this.props.google.maps.Point(25, 10),
                        scaledSize: new this.props.google.maps.Size(50, 50)
                    }}
                     />))}
                <InfoWindow
                    visible={this.state.showInfo}
                    onClick={this.onInfoWindowClose}
                    position={this.state.marker.position}>
                    <div className="infoWindow">
                        <img src={this.props.hotels[this.state.marker.key2].thumbnailUrl} alt="hotel-pic" />
                        <span>{this.props.hotels[this.state.marker.key2].name}</span>
                        <span>{this.props.hotels[this.state.marker.key2].address.streetAddress}</span>
                        <span>{this.props.hotels[this.state.marker.key2].starRating}</span>
                        <span>{this.props.hotels[this.state.marker.key2].guestReviews.unformattedRating}</span>
                        <span>{this.props.hotels[this.state.marker.key2].ratePlan.price.current}</span>
                    </div>
                </InfoWindow>
            </Map>
            </div>
        )
    }
};

export default GoogleApiWrapper({ apiKey: (process.env.REACT_APP_GOOGLE_KEY) })(MapContainer);
