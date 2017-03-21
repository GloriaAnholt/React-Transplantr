import React, { Component } from 'react';
import CitySelector from './CitySelector'


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


