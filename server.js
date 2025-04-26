const restify = require('restify');

// Create server
const server = restify.createServer();

// Middleware to parse request body
server.use(restify.plugins.bodyParser());

// Simple GET endpoint
server.get('/', (req, res, next) => {
  res.send('Hello from Restify server!');
  next();
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


