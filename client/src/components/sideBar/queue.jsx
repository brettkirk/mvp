//THIS IS THE friends list component
import React from 'react';
import Entry from './entry.jsx';

class Queue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>);
  }
}

export default Queue;