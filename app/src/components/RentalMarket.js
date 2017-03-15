import React, { Component, PropTypes } from 'react';


export default function RentalMarket(props) {
    return (
        <div>
            { props.currentCity ?
                <h3>Your Rental Market</h3> : <h3>Their Rental Market</h3>
            }
            <p>State Average: { props.avgRental }</p>
            <p>{ props.state_rent_percent }</p>
            <p>{ props.city_median_1bdrm }</p>
            <p>{ props.median_1bdrm_percent }</p>
            <p>{ props.city_mean_1bdrm }</p>
            <p>{ props.city_median_2bdrm }</p>
            <p>{ props.median_2bdrm_percent }</p>
            <br />
            <p>Our rental data comes from a variety of sources, all of which track rental markets using real online
            listings. Our data set for the median price (that is, the dollar amount that falls in the exact middle of
            all rents) is more comprehensive. Where possible, we include mean (average) rent prices, too.</p>
        </div>
    )
}

RentalMarket.propTypes = {
    aveHousePrice: PropTypes.number,
    city: PropTypes.string,
    currentCity: PropTypes.string.isRequired
}      
