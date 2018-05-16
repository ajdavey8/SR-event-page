import React, { Component } from 'react';

export default class VenueDetail extends Component {
    render() {
        return (
            <div className="venue-detail">
                <div className="areas">
                    <p>What areas does this event cover?</p>
                    <p>{this.props.venue.areas_covered}</p>
                </div>

            </div>
        )
    }
}