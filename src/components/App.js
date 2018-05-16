import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from './Header';
import BookingForm from './bookingForm';
import GoogleMap from './googleMap';
import '../css/App.css';

class App extends Component {
    render() {
        return (
         <div className="App" >
            <Header/>
            <BookingForm/>
            <GoogleMap/>
            
         </div>
        )
    }
}

export default hot(module)(App);