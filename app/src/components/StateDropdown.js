import React from 'react';
import { STATES } from '../constants';
import '../../public/styles/modules.css';


export default function StateDropdown(props) {
    let states = STATES.map((state, i) => {
        return <option key={i+1} value={state.value}>{ state.name }</option>
    })

    return (
        <div>
            <label>Choose State:</label>
            <select className="dropdowns" 
                    onChange={ props.handleState }
                    value={ props.value }
            >
                <option value="" key={0}>Choose State</option>
                { states }
            </select>
        </div>
    )
}
