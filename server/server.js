const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server started on: ', server.address());
});
