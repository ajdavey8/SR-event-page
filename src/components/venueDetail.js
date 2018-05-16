import React, { Component } from 'react';

export default class VenueDetail extends Component {
    render() {

        const { areas_covered, directions} = this.props.venue

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
            </div>
        )
    }
}