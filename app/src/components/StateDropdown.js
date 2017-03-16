import React from 'react';
import { STATES } from '../constants';
import '../../public/styles/modules.css';


export default function StateDropdown() {

    let states = STATES.map((state, i) => {
        return <option key={i} value={state}>{ state }</option>
    })

    return (
        <div>
            <label>Choose State:</label>
            <select className="dropdowns">
                <option value="">Choose State</option>
                { states }
            </select>
        </div>
    )
}
