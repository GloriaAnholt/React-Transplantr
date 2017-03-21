import React from 'react';
import '../index.css';

export default function ChartData() {
    return (
         <div id="graphs-page" class="tab-content">
          <div id="chart_container" class="chartSize">
            <h3 class="graph-title">Home Prices</h3>
            <canvas id="chart_canvas"></canvas>
            <p class="graph-description" id="housing-graph-description">No housing data entered.</p>
          </div>
          <div id="chart2_container" class="chartSize">
            <h3 class="graph-title">Income Data</h3>
            <canvas id="chart2_canvas"></canvas>
            <p class="graph-description" id="income-graph-description">No income data entered.</p>
          </div>
          <div class="more-cities">
            <form action="city-data">
              <input type="submit" class="more-cities-btn" value="Try Different Cities" />
            </form>
          </div>
        </div>
    )
}