import React from 'react';
import '../../public/styles/modules.css';


export default function CityDropdown(props) {

    let LOCATION = (props.location === 'current') ? 'Current' : 'Destination';

    let cityOptions = props.city.map((city, i) => {
        return ( 
            <option key={i} value={city}>{ city }</option> 
        )
    })

    return (
        <span>
            <label htmlFor="city-choice">{ LOCATION } City:</label>
                <select className="dropdowns" id="city-choice">
                  <option value="">Choose City</option> 
                  { cityOptions }
                </select>
        </span>
    )
}