//THIS IS THE song queue component
import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
    <table>
    <tbody>
      <tr>
      <td><img src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png" width="32" height="32" /></td>
      <td><span>Username</span><br /><span>This is where a message would go...</span></td>
      </tr>
    </tbody>
    </table>
    </div>);
  }
}

export default Message;