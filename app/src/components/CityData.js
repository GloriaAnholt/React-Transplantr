import React, { Component } from 'react';
import CitySelector from './CitySelector'


export default class CityData extends Component {
  render() {
    return (
      <div>
          <CitySelector location={"current"} />
          <CitySelector location={"destination"} />
      </div>
    );
  }
}


