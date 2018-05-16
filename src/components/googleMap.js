import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {

    const latlng = {
      lat: this.props.lat,
      lng: this.props.lng
    }
 
      var map = new window.google.maps.Map(this.refs.map,{
        center: latlng,
        zoom: this.props.zoom
    });

    var marker = new window.google.maps.Marker({
      postion: latlng,
      map: map
      
    });
  }

  render() {
    return <div ref="map" className="map" > </div>
  }
}
