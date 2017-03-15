import React from 'react';
import { BIOS } from '../constants';


export default function Bio() {

    let bios = BIOS.map((bio, i) => {
        return (
            <div className="bio" key={ bio.name } >
                <p>
                    <img className="headshot" src={ bio.src } alt={ bio.name }/>
                    <strong>{ bio.name }</strong> { bio.bio }
                </p>
            </div>)
    })
    return ( <div>{ bios }</div>)
}