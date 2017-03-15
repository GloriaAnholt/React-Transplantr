import React, { Component, PropTypes } from 'react';
import { STATES } from '../constants';

export default function StateDropdown() {

    console.log('states are ', STATES);
    let states = STATES.map((state, i) => {
        return <option key={i} value={state}>{ state }</option>
    })

    return (
        <div>
            <label>Choose State:</label>
            <select>
                <option value="">Choose State</option>
                { states }
            </select>
        </div>
    )
}
