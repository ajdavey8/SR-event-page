import React, { Component } from 'react';
import GoogleMap from './googleMap';

export default class VenueDetail extends Component {
    render() {

        const { areas_covered, directions, transport_station} = this.props.venue.location
        const latlng = this.props.venue.location.address.geoloc.split(',');
        const lat = parseFloat(latlng[0]);
        const lng = parseFloat(latlng[1]);

        return (
            <div className="venue-detail">
                <div className="people">
                    <p><b>Who is this event for?</b></p>
                    <p>This event is suitable for anyone looking for a room or roommate in {this.props.venue.location.address.state}</p>
                </div>
                <div className="areas">
                    <p><b>What areas does this event cover?</b></p>
                    <p>{this.props.venue.areas_covered}</p>
                </div>
                <div className="directions">
                    <p><b>Venue Directions</b></p>
                    <p>{directions}</p>
                </div>
                <div className="subway">
                    <p><b>Nearest Subway</b></p>
                    <p>{transport_station}</p>
                </div>
                <div className="big-map">
                <p><b>Map</b></p>
                    <GoogleMap zoom={16} lat={lat} lng={lng}/>
                </div>
            </div>
        )
    }
}