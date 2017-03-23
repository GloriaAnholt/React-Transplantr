import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CitySelector from './CitySelector'
import '../../public/styles/modules.css';

export default class CityData extends Component {
  render() {
    return (
      <div>
        <div>
          <CitySelector location={"current"} />
          <CitySelector location={"destination"} />
        </div>

          <div className="showChartContainer">
            <Link to="chart-data">
              <button className="get-started-btn" id="chart-submit">
                Show Charts
              </button>
            </Link>
          </div>
      </div>
    );
  }
}


