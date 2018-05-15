import React, { Component } from 'react';

export default class BookingForm extends Component {
    render() {
        return(

        <div>
            <form>
                <h2>Reserve Your Place Now</h2>
                <input type="radio" id="need" name="need" value="need"/>
                <label> I need a room <b>Places available</b> </label>
            </form>
        </div>
    )};
}