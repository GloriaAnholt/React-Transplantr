import React from 'react';
import '../../public/styles/modules.css';


export default function CountyDropdown(props) {

    let LOCATION = (props.location === 'current') ? 'Current' : 'Destination';
    console.log('location is', LOCATION);
    return (
        <span>
            <label htmlFor="county-filter">{ LOCATION } County:</label>
                <select className="dropdowns" id="county-filter">
                  <option value="">Choose County</option> 
                </select>
        </span>
    )
}