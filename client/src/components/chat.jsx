//THIS IS THE chat component
import React from 'react';
import Messages from './chat/messages.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Conversation with USERNAME</h2>
      <input type="text" name="input"></input> <button>Send</button>
      <Messages />
    </div>);
  }
}

export default Chat;