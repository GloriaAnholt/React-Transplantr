import React, { Component, PropTypes } from 'react';


export default function HousePrices(props) {
    return (
        <div>
            <h3>House Prices</h3>
            <p>Median House Price: <strong>{ props.aveHousePrice }</strong></p>
            <p>{ props.curr_income_to_mortgage }</p>
            { 
                props.currentCity ? 
                    <p>We get our house price data from Zillow.com, an online superstore for buying and selling homes.
                        According to Zillow, in { props.city } the <strong>median house price</strong> is <strong>{ props.aveHousePrice }</strong></p>
                :
                    <p>Given your current income, this is how much you would need to make in order to have the same
                        home buying power in your new city.</p>
            }
        </div>
    )
}

HousePrices.propTypes = {
    aveHousePrice: PropTypes.number,
    curr_income_to_mortgage: propTypes.string,
    city: PropTypes.string,
    currentCity: PropTypes.string.isRequired
}      
