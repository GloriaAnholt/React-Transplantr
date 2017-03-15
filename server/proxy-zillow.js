const express = require('express');
const requestProxy = require('express-request-proxy');


function proxyZillow(req, res, next) {
  console.log('Routing Zillow request for', req.params[0]);
  requestProxy({
    method: 'GET',
    dataType: 'xml',
    url:'http://www.zillow.com/webservice/GetRegionChildren.htm',
    query: {
      'zws-id': process.env.zillowKey,
      state: req.params.state,
      county: req.params.county
    }
  })
  next();
}

module.exports = proxyZillow;