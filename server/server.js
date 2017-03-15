const express = require('express');
const app = express();
const morgan = require('morgan');
const proxyZillow = require('./proxy-zillow');
const proxyCensus = require('./proxyCensus');

const port = process.env.PORT || 3000;

app.use(morgan(dev))

app.use('/zillow/:state/:county', proxyZillow);

app.use('/census/:state', proxyCensus);

// The serve-all has to be below the specific requests or it overrides them
app.use(express.static('./'));

app.get('*', function(req, res) {
  console.log('New request:', request.url);
  res.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
