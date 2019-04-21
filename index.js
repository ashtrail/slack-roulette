const express = require('express');
const app = express();
// const errorHandler = require('./error-handler');

// global.game = new Game();

const routes = require('./app/routes');

app.use(express.json());

// Log all request received
app.use((req, res, next) => {
  console.log('Received Request', {
    method: req.method,
    url: req.originalUrl,
    body: req.body
  });
  next();
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use('/', routes);

app.use(function(req, res) {
  res.status(404).send("404 : Can't find URL");
});

// app.use(errorHandler);

const server = app.listen(process.env.PORT || 3000, function() {
  console.log(`Server listening on ${server.address().port}`);
});

module.exports = app; // for testing
