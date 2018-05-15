import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import BookingForm from './bookingForm';
import '../css/App.css';

class App extends Component {
    render() {
        return (
         <div className="App" >
            <BookingForm/>
         </div>
        )
    }
}

export default hot(module)(App);