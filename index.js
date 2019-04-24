const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const commandMap = require('./app/commands');
const State = require('./app/state');

const state = new State();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/', (req, res) => {
  console.log(`state = ${JSON.stringify(state, null, 2)}`);
  const revolver = state.getGun(req.body.channel_id);
  const command = req.body.text.split(' ').shift();
  const answer = !commandMap[command]
    ? "this command isn't valid :disappointed:"
    : commandMap[command](revolver, req.body.user_name);
  res.status(200).send({
    response_type: 'in_channel',
    text: answer
  });
});

app.use(function(req, res) {
  res.status(404).send("404 : Can't find URL");
});

const server = app.listen(process.env.PORT || 3000, function() {
  console.log(`Server listening on ${server.address().port}`);
});
