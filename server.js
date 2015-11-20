var express = require('express');
var app = express();
var cors = require('cors');
var easy = require('./app/data/easyBoards').easyBoards;
var medium = require('./app/data/mediumBoards').mediumBoards;
var hard = require('./app/data/hardBoards').hardBoards;
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(cors());

router.get('/', function(req, res) {
  res.send('Request in correct API format.');
});

router.get('/:difficulty', function(req, res) {
  if (req.params.difficulty === 'easy'){
    res.json(easy[Math.floor(Math.random() * easy.length)]);
  }
  else if (req.params.difficulty === 'medium') {
    res.json(medium[Math.floor(Math.random() * medium.length)]);
  }
  else if (req.params.difficulty === 'hard') {
    res.json(hard[Math.floor(Math.random() * hard.length)]);
  }
  else {
    res.json({error: 'Request is not valid.'});
  }
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port);
