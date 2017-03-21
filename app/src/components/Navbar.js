import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import ReactTransplantr from './ReactTransplantr'
import '../index.css';

export default function Navbar() {
    return (
        <header>
            <nav className="main-nav">
                <ul>
                <div className="icon-menu"></div>
                <Link className="link" to="/"><span className="branding">Transplantr</span></Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/city-data">City Data</Link>
                <Link className="link" to="/city-comparison">City Comparison</Link>
                </ul>
            </nav>

            <Route path="/about" component={About}/>
            <Route path="/city-data" component={ReactTransplantr}/>

        </header>
    )
}