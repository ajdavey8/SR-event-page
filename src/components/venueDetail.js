import React, { Component } from 'react';
import GoogleMap from './googleMap';

export default class VenueDetail extends Component {
    render() {

        const { areas_covered, directions, transport_station} = this.props.venue
        const latlng = this.props.venue.location.address.geoloc.split(',');
        const lat = parseFloat(latlng[0]);
        const lng = parseFloat(latlng[1]);

        return (
            <div className="venue-detail">
                <div className="people">
                    <p>Who is this event for?</p>
                    <p>This event is suitable for anyone looking for a room or roommate in {this.props.venue.location.address.state}</p>
                </div>
                <div className="areas">
                    <p>What areas does this event cover?</p>
                    <p>{areas_covered}</p>
                </div>
                <div className="directions">
                    <p>Veune Directions</p>
                    <p>{directions}</p>
                </div>
                <div className="subway">
                    <p>Nearest Subway</p>
                    <p>{transport_station}</p>
                </div>
                <div className="big-map">
                    <GoogleMap zoom={16} lat={lat} lng={lng}/>
                </div>
            </div>
        )
    }
}