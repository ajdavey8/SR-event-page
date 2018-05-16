import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {
    new window.google.maps.Map(this.refs.map,{
      zoom: 15,
      center: {
        lat: 40.7134658,
        lng: -73.9415119
      }
    })
  }

  render() {
    return <div ref="map" style={{ height: '30vh', width: '50%' }}> </div>
  }
}
