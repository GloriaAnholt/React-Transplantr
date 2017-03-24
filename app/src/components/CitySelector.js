import React, { Component } from 'react';
import StateDropdown from './StateDropdown';
import CountyDropdown from './CountyDropdown';
import CityDropdown from './CityDropdown';
import IncomeDisplay from './IncomeDisplay';
import HousePrices from './HousePrices';
import RentalMarket from './RentalMarket';
//import Fetcher from '../lib/Fetcher';
import { STATES, COUNTIES } from '../constants';
import '../../public/styles/modules.css';


export default class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateCode: '00',
      stateSelection: '',
      countySelection: '',
      citySelection: '',
      counties: [],
      city: []
    };
    this.handleState = this.handleState.bind(this);
    this.handleCounty = this.handleCounty.bind(this);
  }

  handleState(e) {
    let s = STATES.filter(s => {
      if (e.target.value == s.value) {
        return s
      }
    })[0];
    let c = COUNTIES[s.name];
    this.setState({
      stateCode: e.target.value,
      stateSelection: s.name,
      counties: c,
    });
  }

  handleCounty(e) {
    this.setState({ countySelection: e.target.value })
  }
  
  render() {
    return (
      <div className={ this.props.location === 'current' ? "current-side" : "destination-side" }>
        <div id="data-page" className="tab-content">
          <div className="datacontainer">
            <form className={ this.props.location === 'current' ? 
              "city-input current-side" : "city-input destination-side" }>
              { this.props.location === 'current' ? 
                <h2>Your Current City</h2> : <h2>Destination City</h2>
              }
              
              <StateDropdown handleState={ this.handleState } value={ this.state.stateCode } />
              <CountyDropdown 
                  handleCounty={ this.handleCounty }
                  location={ this.props.location } 
                  counties={ this.state.counties } 
                  value={ this.state.countySelection } 
              />
              <CityDropdown location={ this.props.location } city={ this.state.city } />

              { ( this.props.location === 'current' ) &&
                <span>
                  <label htmlFor="current-income">Current Income:</label>
                  <input type="text" name="current-income" id="current-income" />
                </span>  
              }
            </form>
          </div>
          <IncomeDisplay className="datacontainer" />
          <HousePrices className="datacontainer" />
          <RentalMarket className="datacontainer" />  
        </div>
      </div>
    )
  }

}