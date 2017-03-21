import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Landing from './components/Landing';
import About from './components/About';
import CityData from './components/CityData';
import ChartData from './components/ChartData';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Hero />
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/city-data" component={CityData} />
      <Route path="/chart-data" component={ChartData} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);