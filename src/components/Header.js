import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../css/header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="Header row">
                <img src={logo} alt="SpareRoom Logo" />
                <div className="top-nav-bar row">
                    <a href="#"><b>Home</b></a>
                    <a href="#"><b>Events</b></a>
                </div>
                <div className="bottom-nav-bar">
                    <a href="#">Event</a>
                </div>
            </div>
        )
    }
}