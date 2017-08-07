//THIS IS THE song queue component
const $ = require('jquery');
const msg = require('../../../messages.js');
import React from 'react';
import Message from './message.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 1
    };
  }

  componentWillMount() {
    $.get('/messages');
    // setInterval(() => {
    //   console.log(this.state())
    //   this.setState({state: this.state++});
    // }, 2000);

  }

  render() {
                   //  [{ _id: '598610ab7a6403c3f4282b7e',
                   //    from: 0,
                   //    to: 1,
                   //    text: 'Testing 1 2 3',
                   //    createdAt: 1501958315000,
                   //    __v: 0 },
                   //  { _id: '598610b17a6403c3f4282b7f',
                   //    from: 0,
                   //    to: 1,
                   //    text: 'here is another',
                   //    createdAt: 1501958321000,
                   //    __v: 0 },
                   //  { _id: '59862977030846edbdafc167',
                   //    from: 0,
                   //    to: 1,
                   //    text: 'hey there',
                   //    createdAt: 1501964663000,
                   //    __v: 0 },
                   //  { _id: '59863bd64ba84321352858d2',
                   //    from: 0,
                   //    to: 1,
                   //    text: 'Oh wow',
                   //    createdAt: 1501969366000,
                   //    __v: 0 }
                   // ];//get messages here
    var messages = msg.messages();
    messages = messages.reverse();
    console.log(messages); 
    
    const message = messages.map((message) => 
      <table>
      <tbody>
        <tr>
        <td><img src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png" width="32" height="32" /></td>
        <td><span>{message.from}</span><br /><span>{message.text}</span></td>
        </tr>
      </tbody>
      </table>
    );

    return (<div>{message}</div>);
  }
}

export default Messages;