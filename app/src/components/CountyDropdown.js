import React from 'react';
import '../../public/styles/modules.css';


export default function CountyDropdown(props) {

    let LOCATION = (props.location === 'current') ? 'Current' : 'Destination';
    let countyOptions = props.counties.map((county, i) => {
        return ( 
            <option key={i} value={county}>{ county }</option> 
        )
    })

    return (
        <span>
            <label htmlFor="county-filter">{ LOCATION } County:</label>
                <select className="dropdowns" id="county-filter" value={ props.value }>
                  <option value="">Choose County</option> 
                  { countyOptions }
                </select>
        </span>
    )
}