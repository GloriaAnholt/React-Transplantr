import React from 'react';
import StateDropdown from './StateDropdown';
import CountyDropdown from './CountyDropdown';
import CityDropdown from './CityDropdown';
import IncomeDisplay from './IncomeDisplay';
import HousePrices from './HousePrices';
import RentalMarket from './RentalMarket';
import '../../public/styles/modules.css';


export default function CitySelector(props) {
    return (
        <div className={ props.location === 'current' ? "current-side" : "destination-side" }>
          <div id="data-page" className="tab-content">
            <div className="datacontainer">
              <form className={ props.location === 'current' ? 
                "city-input current-side" : "city-input destination-side" }>
                { props.location === 'current' ? 
                  <h2>Your Current City</h2> : <h2>Destination City</h2>
                }
                
                <StateDropdown />
                <CountyDropdown location={ props.location } county={ [] }/>
                <CityDropdown location={ props.location } city={ [] } />

                { ( props.location === 'current' ) &&
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