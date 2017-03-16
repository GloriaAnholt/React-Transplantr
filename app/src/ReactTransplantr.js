import React, { Component } from 'react';
//import About from './components/About';
import CitySelector from './components/CitySelector'


export default class ReactTransplantr extends Component {
  render() {
    return (
      <div>
          <CitySelector location={"current"} />
          <CitySelector location={"destination"} />
      </div>
    );
  }
}


