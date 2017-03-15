import React from 'react';
import Bio from './Bio';

export default function About(props) {
    return (
        <div id="about-page" className="tab-content">
          <div>
            <h1>What is Transplantr?</h1>
            <p><b>Transplantr</b> was built in 2016 to provide Americans with the information they need to relocate. Users must enter their current city and income as well as their destination county and city. From there, Transplantr will compare the user's economic status in their current city to the cost of living in their destination. We've added additional information such as the national average, percent of people in poverty for both locations and the salary they would need to make in order to maintain the same economic status in their destination city.</p>
          </div>
          <div>
            <h1>Why do I need Transplantr?</h1>
            <p>Over 40 million people move or relocate in the U.S. every year. While popular sites such as <b>Zillow</b> and <b>BestPlaces</b> provide housing and cost of living information, we've made it our mission to provide transplanters with all of the economic information they need in one place. We've decided to add even more information, detailed above. <a href="city-data">Get started today</a>!</p>
          </div>
          <hr />
          <div>
            <h1>The Developers</h1>
            <Bio />
          </div>
        </div>
    )
}