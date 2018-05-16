import React, { Component } from 'react';
import '../css/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header row">
                <div className="logo">
                 <img src={require('../images/logo.png')} alt="SpareRoom Logo" />
                </div>
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