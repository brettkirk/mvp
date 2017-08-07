//THIS IS WHERE HELPER FUNCTIONS FOR WORKING WITH SPOTIFY WEB API WILL BE HANDLED


create = function(message, userid, friendid) {
  var time = new Date().toString();
  var time = Date.parse(time);

  messageObj = {
    from: userid,
    to: friendid,
    text: message,
    created: time
  }

  return messageObj;
}

find = 

module.exports.create = create;