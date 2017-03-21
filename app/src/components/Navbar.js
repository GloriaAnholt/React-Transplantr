import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import CityData from './CityData'
import Landing from './Landing';
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
                <Link className="link" id="home-link" to="/"><span className="branding">Transplantr</span></Link>
                <Link className="link" id="about-link" to="/about">About</Link>
                <Link className="link" id="city-data" to="/city-data">City Data</Link>
                <Link className="link" id="graphs-link" to="/city-comparison">City Comparison</Link>
                </ul>
            </nav>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/city-data" component={CityData} />
        </header>
    )
}