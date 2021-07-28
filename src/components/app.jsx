
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';

import FlatList from './flat-list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flatsList: flats,
    };
  }

  selectFlat = (index) => {
    return (
      this.setState({ selectedFlat: flats[index] })
    );
  };

  center() {
    const { selectedFlat } = this.state;

    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render() {
    const { flatsList, selectedFlat } = this.state;

    return (
      <div>
        <FlatList
          flats={flatsList}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        
        <div className="map-container" style={{height: '100vh', width: '100%' }}>
          <GoogleMapReact center={this.center()} defaultZoom={15}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
