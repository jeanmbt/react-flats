/* eslint-disable */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat-list.jsx';
import flats from '../../data/flats.js';
import Marker from './marker'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats,
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }

  selectFlat = (index) => {
    this.setState({ selectFlat: flats[index] });
  };

  render() {
    const images = [
      { img: "flat3.jpg" },
    ]
    
    return(
      <div>
        <FlatList 
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        
        <div className="maps-container" style={{height: '100vh', width: '100%'}}>
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API}}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
