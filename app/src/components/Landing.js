import React from 'react';
import { Link, Route } from 'react-router-dom';
import CityData from './CityData'
import '../index.css';

export default function Landing() {
    return (
        <div id="threeColumnHome" className="tab-content">
          <div className="home_column">
            <h1>Who</h1>
            <p>Every year, approximately 14% of Americans move. Whether it be to another part of their city or to another state entirely, over 40 million Americans are scouring the internet and other resources to find the information and tools they need to relocate.</p>
            <p><a href="about">Learn more</a></p>
          </div>
          <div className="home_column">
            <h1>What</h1>
            <p><b>Transplantr</b> was established in 2016 with a mission to provide Americans with the information they need to plan their move. While a plethora of websites can provide this information, Transplantr serves to be an all-in-one resource.</p>
            <p><a href="about">Learn more</a></p>
          </div>
          <div className="home_column">
            <h1>Why</h1>
            <p>Zillow, a popular real estate website, provides users with property listings in a given area but does not offer the average salary and cost of living in that area. Other sites  help users compare the average cost of living in their current city to their provided destination, but <b>Transplantr</b> is different.</p>
            <p><a href="about">Learn more</a></p>
          </div>
          <div className="get-started">
          <Link to="/city-data">
            <button className="get-started-btn">Get Started</button>
          </Link>
          <Route path="/city-data" component={CityData} />
          </div>
        </div>
    )
}