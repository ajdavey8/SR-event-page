import React, { Component } from 'react';
import '../css/bookingForm.css';
export default class BookingForm extends Component {
    render() {
        return(

        <div className="booking-form">
            <form>
                <p><b>Reserve Your Place Now</b></p>
                <input type="radio" id="need" name="RoomOption1" value="need"/>
                <label> I need a room <b>Places available</b> </label>
                <br></br>
                <input type="radio" id="have" name="RoomOption2" value="have"/>
                <label> I have a room <b>Places available</b> </label>
                <br></br>
                <b>Name</b>
                <br></br>
                <input type="text" id="username" name="name" placeholder="Please Enter Your Name"/>
                <br></br>
                <b>Email</b>
                <br></br>
                <input type="text" id="email" name="email" placeholder="Please Enter Your Email Address"/>
                <br></br>
                <p>
                    We won't give your email address to anyone else.<br></br>
                    See our Privacy Policy for more details.
                </p>
                <button type="submit">Book </button>
                <p>All our events are in licensed venues, so bring some ID just in case you're lucky enough to be asked your age!</p>
            </form>
        </div>
    )};
}