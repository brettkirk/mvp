let messagesArr = [{ _id: '598610ab7a6403c3f4282b7e',
                      from: 'Brett',
                      to: 'Bot',
                      text: 'Testing 1 2 3',
                      createdAt: 1501958315000,
                      __v: 0 },
                    { _id: '598610b17a6403c3f4282b7f',
                      from: 'Brett',
                      to: 'Bot',
                      text: 'here is another',
                      createdAt: 1501958321000,
                      __v: 0 }];

var messages = function(set) {
  if (set && set.length > 0) {
    console.log('new data')
    messagesArr = messagesArr.concat(set);
    return messagesArr;
  } else {
    return messagesArr;
  }
}

module.exports.messages = messages;