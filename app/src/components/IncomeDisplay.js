import React, { PropTypes } from 'react';
import '../../public/styles/modules.css';

export default function IncomeDisplay(props) {
    return (
        <div className="comparison-boxes">
            <h3>Income</h3>
            <p id={ props.userIncome }></p>
            <p>Median Income: <strong>{ props.medianIncome }</strong> (household)</p>
            <p>Federal Median Income: <strong>$56516</strong> (household)</p>
            <p>Federal Minimum: <strong>$15080</strong> (individual)</p>
            <p>{ props.county } Percentage Poverty: <strong>{ props.percentPoverty }</strong></p>       
            {  // check which set of text to return based on the side asking for the component
                props.currentCity ? 
                    <div>
                        <p>We get our median income and poverty data from the U.S. Census Bureau's Small Area Income and Poverty
                        Estimates (SAIPE) program's 2012 census. The program provides estimates of income and poverty levels for
                        all school districts, counties, and states in the US.
                        </p> 
                        <p> According to the SAIPE Census in 2012, in { props.county }, the median income was <strong>{ props.medianIncome }</strong>.</p>
                        <p><strong>{ props.percentPoverty }</strong> of people in the county were living at or below the Federal Poverty Line.</p>
                    </div>
                : 
                    <p>Given your current income's relation to the median (in your current city), we've calculate
                        what you would need to make in order to maintain the same relationship to the new median income.
                        That is, to maintain approximately your lifestyle, this is how much do you need to make in your new city.
                    </p> 
            }
        </div>
    )
 }

IncomeDisplay.propTypes = {
    userIncome: PropTypes.number,
    medianIncome: PropTypes.number,
    percentPoverty: PropTypes.number,
    county: PropTypes.string,
    currentCity: PropTypes.string
}      
