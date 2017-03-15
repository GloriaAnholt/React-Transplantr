const express = require('express');
const requestProxy = require('express-request-proxy');


export default function proxyCensus(req, res, next) {
  console.log('Routing Census request for', req.params);
  requestProxy({
    method: 'GET',
    url:'http://api.census.gov/data/timeseries/poverty/saipe',
    query: {
      'get': 'NAME,SAEMHI_PT,SAEPOVRTALL_PT',
      'for': 'county:*',
      'in': 'state:' + req.params.state,
      time: '2012',
      key: process.env.censusKey
    }
  })
  next();
}
