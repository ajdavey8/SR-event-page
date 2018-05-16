import React, { Component } from 'react';
import BarPhoto from '../images/bar-photo.jpg';
import GoogleMap from './googleMap';

export default class EventDetail extends Component {

    formatDate(date) {
        const dateObject = new Date(date);
        const formatedDate= dateObject.toString().split(' ').splice(0,4).join(' ');
        return formatedDate
    }

    render() {
        const { datetime, start_time, end_time, am_pm } = this.props.event.date_time;
        const latlng = this.props.event.location.address.geoloc.split(',');
        const lat = parseFloat(latlng[0]);
        const lng = parseFloat(latlng[1]);
        
        return (
        <div className="event-details">
            <div className="Title">
                <h2><b>SpeedRoomMating Brooklyn @ {this.props.event.location.name}</b></h2>
            </div>
            <div>
                <img src={BarPhoto} alt="Photo of a bar" style={{ width: '100%', height: "300px"}}/>
            </div>
            <div className="details">
                <h3><b>{this.props.event.location.name}</b></h3>
                <div>
                    {this.formatDate(datetime)}
                    <br></br>
                    {start_time}:00 {am_pm} - {end_time}:00 {am_pm}
                </div>
            </div>
            <div className="map">
                <GoogleMap zoom={19} lat={lat} lng={lng} />
            </div>

        </div>
    )}
}