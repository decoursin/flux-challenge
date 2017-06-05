var darkJedis = require('./dark-jedis');
var worlds = require('./worlds');

// API backend =======================================================
var express = require('express');
var bodyParser = require('body-parser');
var serveIndex = require('serve-index');
var path = require('path');
var app = express();
var REST_PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function augmentJediWithNeighborUrls(urlBase) {
  return function (jedi) {
    return {
      id: jedi.id,
      name: jedi.name,
      homeworld: jedi.homeworld,
      master: {
        url: jedi.master ? urlBase + '/dark-jedis/' + jedi.master : null,
        id: jedi.master,
      },
      apprentice: {
        url: jedi.apprentice ? urlBase + '/dark-jedis/' + jedi.apprentice : null,
        id: jedi.apprentice,
      },
    };
  };
}

app.get('/dark-jedis', function (req, res) {
  console.log('GET /dark-jedis');
  var urlBase = 'http://' + req.hostname + ':' + REST_PORT;
  var sith = darkJedis[Math.floor(Math.random()*darkJedis.length)];
  sith = augmentJediWithNeighborUrls(urlBase)(sith);

  var delay = Math.floor(Math.random()*1000) + 500;

  setTimeout(function () {
    console.log('    => ' + sith.name);
    res.send(sith);
  }, delay);
});

app.get('/dark-jedis/:id', function (req, res) {
  console.log('GET /dark-jedis/' + req.params.id);
  var urlBase = 'http://' + req.hostname + ':' + REST_PORT;
  var sith = darkJedis
    .filter(function (x) {
      return x.id === parseInt(req.params.id);
    })
    .map(augmentJediWithNeighborUrls(urlBase))[0] || null;

  var delay = Math.floor(Math.random()*1000) + 500;

  setTimeout(function () {
    if (sith) {
      console.log('    => ' + sith.name);
      res.send(sith);
    } else {
      console.log('    => null');
      res.status(404).send('404. No such Dark Jedi.');
    }
  }, delay);
});

app.use('/', express.static('../index.html'));
app.use(express.static('../'));

var server = app.listen(REST_PORT, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('Express server listening on http://%s:%s', host, port);
});

// Websocket =============================================
var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ server: server });
var timeout;

wss.on('connection', function connection(ws) {
  console.log("CONNECTION");
  ws.on('message', function incoming(message) {
    console.log('WebSocketServer received: %s', message);
    sendRandomWorld();
  });

  function sendRandomWorld() {
    var world = worlds[Math.floor(Math.random()*worlds.length)];
    console.log("sendRamdonWorld: ", world);
    ws.send(JSON.stringify(world));
  }

  function resetTimeout() {
    console.log("resetTimeout");
    if (typeof timeout !== 'undefined') {
      console.log("clearing timeout");
      clearTimeout(timeout);
    }
    var delay = Math.floor(Math.random() * 5000) + 500;
    timeout = setTimeout(function () {
      sendRandomWorld();
      resetTimeout();
    }, delay);
  }

  resetTimeout();
});
