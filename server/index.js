//THIS IS THE SERVER INDEX
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const Promise = require('bluebird');
const db = require('../database');

let app = express();

let lastUpdate = 1501958310000;
// app.get('/', function(req, res) {
//   express.static(__dirname + '/../client/dist', {index: 'login.html'});
//   console.log('done')
//   res.end();
// });

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.urlencoded({extended: true}));

app.post('/send', function(req, res) {
  db.saveMessage(req.body);
})

app.get('/messages', function(req, res, next) {
  db.findMessages(lastUpdate);
  lastUpdate = new Date().toString();
  lastUpdate = Date.parse(lastUpdate);
})

app.get('/spot', function(req, res) {
  console.log('req')
  console.log(req)
  console.log('res')
  console.log(res)
})

app.get('/test', function(req, res) {
  http.get({
    host: 'accounts.spotify.com',
    protocal: 'https:',
    path: '/authorize/?client_id=d5ca41e09fd24032a051928e2c624a92&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A1337%2F'
  }, function(data) {
    console.log(data);
  });
})


// app.get('/login', function(req, res) {
//   res.render('login.ejs');
// })

// app.post('/login', function(req, res) {
//   console.log(req.body)
//   var username = req.body.username;
//   var password = req.body.password;
// })

// app.get('/signup', function(req, res) {
//   res.render('../client/Views/signup.ejs');
// })

// app.post('/signup', function(req, res) {
//   console.log(req.body)
//   var username = req.body.username;
//   var password = req.body.password;
// })

app.post('/path', function(req, res) {

});

app.get('/path', function(req, res) {
  console.log('success');
});

let port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})