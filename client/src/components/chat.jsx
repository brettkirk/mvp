//THIS IS THE chat component
const $ = require('jquery');
const message = require('../../../helpers/messaging.js');
import React from 'react';
import Messages from './chat/messages.jsx';


class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSend() {
    let input = $('input').val();
    let me = 0;
    let friend = 1;

    let messageObj = message.create(input, me, friend);
    $.post('/send', messageObj)
    $('input').val('');
  }

  render() {
    return (<div>
      <h2>Conversation with USERNAME</h2>
      <input type="text" name="input"></input> <button onClick={this.handleSend}>Send</button>
      <Messages />
    </div>);
  }
}


export default Chat;