import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
