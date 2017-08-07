//THIS IS THE friends list component
import React from 'react';
const songs = require('../sidebar.jsx');

class Queue extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.length)

    this.state = {
      length: this.props.length
    }
  }

  render() {
    console.log(this.state);
    const entry = songs.list.map((entry) => 
      <div>
        <h4>{entry.name} - {entry.artist}</h4>
      </div>
    );

    return (<div>{entry}</div>);
  }
}

export default Queue;