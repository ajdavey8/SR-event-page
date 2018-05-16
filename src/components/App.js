import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from './header';
import BookingForm from './bookingForm';
import EventDetail from './eventDetail';
import VenueDetail from './venueDetail';
import '../css/App.css';
import data from '../data/event.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state= {
            event: data.event
        };
    }
    render() {
        return (
        <div className="App" >
            <Header/>
            <div className="container">
                <EventDetail event={this.state.event} />
                <BookingForm/>
                <VenueDetail venue={this.state.event} />
            </div>
            <div className="footer">
            </div>

        </div>
        )
    }
}

export default hot(module)(App);