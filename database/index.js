//THIS IS THE DATABASE INDEX WHERE MOST DATABASE PROCESSES WILL BE HANDLED
const mongoose = require('mongoose');
const $ = require('jquery');
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
  from: Number,
  to: Number,
  text: String,
  createdAt: Number
});

let Message = mongoose.model('Message', messageSchema);

let songSchema = mongoose.Schema({
  spotifyId: String
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
    spotifyId: songObj.id
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
  db.collection('messages').find({createdAt: {$gt: lastUpdate}}).toArray(function(err, result) {
    if (err) {
      throw err;
    }
    newMessages = result;
    for (var i = 0; i < result.length; i++) {
      console.log(result[i])
      var username = 'Brett';// db.collection('users').find({_id: result[i].from})
      var text = result[i].text;

     
    }
    return;
  });
}



module.exports.saveUser = saveUser;
module.exports.saveMessage = saveMessage;
module.exports.saveSong = saveSong;
module.exports.saveQueue = saveQueue;

module.exports.findMessages = findMessages;
module.exports.newMessages = newMessages;