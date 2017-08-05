//THIS IS THE SERVER INDEX
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.post('/path', function(req, res) {

});

app.get('/path', function(req, res) {
  console.log('success');
});

let port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})