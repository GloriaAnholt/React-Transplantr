import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../../public/styles/layout.css';
import '../../public/styles/modules.css';
import '../../public/styles/icons.css';


export default function Navbar() {
    return (
        <header>
            <nav className="main-nav">
                <ul>
                <div className="icon-menu"></div>
                <li className="link" id="home-link"><Link to="/"><span className="branding">Transplantr</span></Link></li>
                <li className="link" id="about-link"><Link to="/about">About</Link></li>
                <li className="link" id="city-data"><Link to="/city-data">City Data</Link></li>
                <li className="link" id="graphs-link"><Link to="/city-comparison">City Comparison</Link></li>
                </ul>
            </nav> 
        </header>
    )
}