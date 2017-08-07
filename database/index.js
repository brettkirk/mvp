//THIS IS THE DATABASE INDEX WHERE MOST DATABASE PROCESSES WILL BE HANDLED
const mongoose = require('mongoose');
const $ = require('jquery');
const msg = require('../client/messages.js');
mongoose.connect('mongodb://localhost/chatify');

//start mongo connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('MongoDB connected')
});

/*------------------------------------*\
|      create schema and models        |
\*------------------------------------*/

let userSchema = mongoose.Schema({
  username: String,
  password: String,
  salt: String,
  currentSong: String,
  stream: String,
  startedAt: Number
});

let User = mongoose.model('User', userSchema);

let messageSchema = mongoose.Schema({
  from: String,
  to: String,
  text: String,
  createdAt: Number
});

let Message = mongoose.model('Message', messageSchema);

let songSchema = mongoose.Schema({
  name: String,
  artist: String,
  uri: String
});

let Song = mongoose.model('Song', songSchema);

let queueSchema = mongoose.Schema({
  songId: Number,
  userId: Number
});

let Queue = mongoose.model('Queue', queueSchema);

/*------------------------------------*\
|      save models to database         |
\*------------------------------------*/

let saveUser = (userObj) => {
  var newUser = new User({
    username: userObj.username,
    password: userObj.password,
    salt: userObj.salt,
    currentSong: userObj.song,
    stream: userObj.stream,
    startedAt: userObj.started
  });

  newUser.save(function(err, newUser) {
    if(err) {

    }
  })
};

let saveMessage = (msgObj) => {
  var newMsg = new Message({
    from: msgObj.from,
    to: msgObj.to,
    text: msgObj.text,
    createdAt: msgObj.created
  });

  newMsg.save(function(err, newMsg) {
    if(err) {

    }
  })
};

let saveSong = (songObj) => {
  var newSong = new Song({
    name: songObj.name,
    artist: songObj.artist,
    uri: songObj.uri
  });

  newSong.save(function(err, newSong) {
    if(err) {

    }
  })
};

let saveQueue = (queueObj) => {
  var newQueue = new Queue({
    songId: queueObj.song,
    userId: queueObj.user
  });

  newQueue.save(function(err, newQueue) {
    if(err) {

    }
  })
};

/*------------------------------------*\
|   delete models from the database    |
\*------------------------------------*/

let removeQueue = (user) => {
  //remove one from begining of queue
}

/*------------------------------------*\
|       get data from database         |
\*------------------------------------*/

let newMessages = [];

let findMessages = (lastUpdate) => {
  console.log(window.messages);
  return db.collection('messages').find({createdAt: {$gt: lastUpdate}}).toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(3);
    msg.messages(result);
    console.log(msg.messages());
    return result;
  });
}


module.exports.saveUser = saveUser;
module.exports.saveMessage = saveMessage;
module.exports.saveSong = saveSong;
module.exports.saveQueue = saveQueue;

module.exports.findMessages = findMessages;
module.exports.newMessages = newMessages;