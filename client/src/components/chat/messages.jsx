//THIS IS THE song queue component
import React from 'react';
import Message from './message.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>);
  }
}

export default Messages;