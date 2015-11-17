var express = require('express');
var app = express();
var data = require('./data/games').boardData;

app.get('/', function(req, res) {
  res.send('Request in correct API format.');
});

app.get('/api/:difficulty', function(req, res) {
  if (req.params.difficulty === 'easy'){
    res.json(data['easy'][0]);
  }
  else if (req.params.difficulty === 'medium') {
    res.json(data['medium'][0]);
  }
  else if (req.params.difficulty === 'hard') {
    res.json(data['hard'][0]);
  }
  else {
    res.send('Request correct difficulty name.');
  }
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})
