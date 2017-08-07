//THIS IS THE chat component
const $ = require('jquery');
const message = require('../../../helpers/messaging.js');
import React from 'react';


let lastUpdate = 1501958310000;

var spencerMessages = [{
  from: 'Brett',
  to: 'Spencer',
  text: 'Hey Spencer.',
  createdAt: 1501958320000
},{
  from: 'Spencer',
  to: 'Brett',
  text: 'Hello Brett.',
  createdAt: 1501958330000
},{
  from: 'Brett',
  to: 'Spencer',
  text: 'I didn\'t scope MVP like the seniors warned us to...',
  createdAt: 1501958340000
}];

var tingMessages = [{
  from: 'Ting',
  to: 'Brett',
  text: 'Hey Brett, can you get me some boba while you are out?',
  createdAt: 1501958320000
},{
  from: 'Brett',
  to: 'Ting',
  text: 'Sure, what do you want?',
  createdAt: 1501958330000
},{
  from: 'Ting',
  to: 'Brett',
  text: 'Mango green tea with lychee jelly please',
  createdAt: 1501958340000
},{
  from: 'Ting',
  to: 'Brett',
  text: 'Thanks!',
  createdAt: 1501958350000
},{
  from: 'Brett',
  to: 'Ting',
  text: 'No problem',
  createdAt: 1501958360000
}];

var karunMessages = [{
  from: 'Brett',
  to: 'Karun',
  text: 'Hey Karun',
  createdAt: 1501958320000
}];

var beccaMessages = [{
  from: 'Brett',
  to: 'Becca',
  text: 'Hey Becca.',
  createdAt: 1501958320000
},{
  from: 'Becca',
  to: 'Brett',
  text: 'Hellooo.',
  createdAt: 1501958330000
}];

function Messages(props) {
  const length = props.length;
  if (!previousLength) {
    var previousLength = length;
  }
  if (props.friend === 'Spencer') {
    var messages = spencerMessages;
  } else if (props.friend === 'Ting') {
    var messages = tingMessages;
  } else if (props.friend === 'Karun') {
    var messages = karunMessages;
  } else if (props.friend === 'Becca') {
    var messages = beccaMessages;
  } 

  const message = messages.map((message) => 
    <table>
    <tbody>
      <tr>
      <td><img src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png" width="32" height="32" /></td>
      <td><span className="name">{message.from}</span><br /><span className="text">{message.text}</span></td>
      </tr>
    </tbody>
    </table>
  );

  return (<div>{message}</div>);
}

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.messages = props.messageArr;

    this.handleSend = this.handleSend.bind(this);

    this.state = {
      messages: 0,
      friend: props.user
    }
  }

  handleSend() {
    let input = $('input').val();
    let me = 'Brett';
    let friend = this.props.user;

    var time = new Date().toString();
    var time = Date.parse(time);

    let messageObj = {
      from: me,
      to: friend,
      text: input,
      created: time
    };

    $.post('/send', messageObj);

    if (friend === 'Spencer') {
      spencerMessages.push(messageObj);
    } else if (friend === 'Ting') {
      tingMessages.push(messageObj);
    } else if (friend === 'Karun') {
      karunMessages.push(messageObj);
    } else if (friend === 'Becca') {
      beccaMessages.push(messageObj);
    } 
    

    this.setState({messages: this.state.messages++})
    $('input').val('');
  }

  render() {
    return (<div>
      <h2>Conversation with {this.props.user}</h2>
      <input type="text" name="input"></input> <button onClick={this.handleSend}>Send</button>
      <Messages friend={this.props.user} />
    </div>);
  }
}


export default Chat;