var express = require('express');
var app = express();
var data = require('./app/models/boards').boardData;

var port = process.env.PORT || 8080;

var router = express.Router();

// router.get('/', function(req, res) {
//   res.send('Request in correct API format.');
// });

router.get('/:difficulty', function(req, res) {
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
    res.json({error: 'Request is not valid.'});
  }
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port);

// var server = app.listen(3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//
//   console.log('App listening at http://%s:%s', host, port);
// })
