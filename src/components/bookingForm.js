import React, { Component } from 'react';
import '../css/bookingForm.css';
export default class BookingForm extends Component {
    render() {
        return(

        <div className="booking-form">
            <form>
                <div className="reservation">
                <p><b>Reserve Your Place Now</b></p>
                </div>
                <div className="room-options">
                <input type="radio" id="need" name="RoomOption1" value="need"/>
                <label> I need a room <b>Places available</b> </label>
                <br></br>
                <input type="radio" id="have" name="RoomOption2" value="have"/>
                <label> I have a room <b>Places available</b> </label>
                </div>
                <div className="name">
                <a><b>Name</b></a>
                <br></br>
                <input type="text" id="username" name="name" placeholder="Please Enter Your Name"/>
                </div>
                <div className="email">
                
                <a><b>Email</b></a>
                <br></br>
                <input type="text" id="email" name="email" placeholder="Please Enter Your Email Address"/>
                </div>
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