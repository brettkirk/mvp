//THIS IS THE song queue component
import React from 'react';
import Message from './message.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var messages = [{ _id: '598610ab7a6403c3f4282b7e',
                      from: 0,
                      to: 1,
                      text: 'Testing 1 2 3',
                      createdAt: 1501958315000,
                      __v: 0 },
                    { _id: '598610b17a6403c3f4282b7f',
                      from: 0,
                      to: 1,
                      text: 'here is another',
                      createdAt: 1501958321000,
                      __v: 0 },
                    { _id: '59862977030846edbdafc167',
                      from: 0,
                      to: 1,
                      text: 'hey there',
                      createdAt: 1501964663000,
                      __v: 0 }
                   ];//get messages here

    const messageEntry = messages.map((message) => 
      <table>
      <tbody>
        <tr>
        <td><img src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png" width="32" height="32" /></td>
        <td><span>{message.from}</span><br /><span>{message.text}</span></td>
        </tr>
      </tbody>
      </table>
    );

    return (<div>{messageEntry}</div>);
  }
}

export default Messages;