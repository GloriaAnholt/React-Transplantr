import React, { Component, PropTypes } from 'react';


export default function IncomeDisplay(props) {
    return (
        <div>
            <h3>Income</h3>
            <p id={ props.userIncome }></p>
            <p>Median Income: <strong>{ props.medianIncome }</strong> (household)</p>
            <p>Federal Median Income: <strong>$56516</strong> (household)</p>
            <p>Federal Minimum: <strong>$15080</strong> (individual)</p>
            <p>{ props.county } Percentage Poverty: <strong>{ props.percentPoverty }</strong></p>
            <p>We get our median income and poverty data from the U.S. Census Bureau's Small Area Income and Poverty
                Estimates (SAIPE) program's 2012 census. The program provides estimates of income and poverty levels for
                all school districts, counties, and states in the US.
            </p>
            <p> According to the SAIPE Census in 2012, in { props.county }, the median income was <strong>{ props.medianIncome }</strong>.</p>
            <p><strong>{ props.percentPoverty }</strong> of people in the county were living at or below the Federal Poverty Line.</p>
        </div>
    )
 }

IncomeDisplay.propTypes = {
    userIncome: PropTypes.number.isRequired,
    medianIncome: PropTypes.number,
    percentPoverty: PropTypes.number,
    county: PropTypes.string,
}      
