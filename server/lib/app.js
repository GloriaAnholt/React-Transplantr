const express = require('express');
const app = express();
const morgan = require('morgan');
const proxyZillow = require('./proxy-zillow');
const proxyCensus = require('./proxy-census');


app.use(morgan('dev'))

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    console.log('Header', req.headers['x-forwarded-proto']);
    if (req.headers['x-forwarded-proto'] === 'https') next(); 
    else res.redirect(`https://${req.hostname}${req.url}`);
  });
}

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/zillow/:state/:county', proxyZillow);
app.use('/census/:state', proxyCensus);

app.use(express.static('./'));

app.get('*', (req, res) => {
  console.log('New request:', req.url);
  res.sendFile('index.html', {root: '../'});
});

module.exports = app;