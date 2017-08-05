//THIS IS THE sidebar component
import React from 'react';
import Friends from './sideBar/friends.jsx';
import Queue from './sideBar/queue.jsx';

function FriendsButton(props) {
  return (
    <button onClick={props.onClick}>Friends List</button>
  );
}

function QueueButton(props) {
  return (
    <button onClick={props.onClick}>Music Queue</button>
  );
}

function WhichSideBar(props) {
  const selected = props.option;
  if (selected === 'Queue') {
    return <Queue />;
  }
  return <Friends />;
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriendsClick = this.handleFriendsClick.bind(this);
    this.handleQueueClick = this.handleQueueClick.bind(this);
    this.state = {
      option: 'Friends'
    };
  }

  handleFriendsClick() {
    this.setState({option: 'Friends'});
  }

  handleQueueClick() {
    this.setState({option: 'Queue'});
  }

  render() {
    const option = this.state.option;

    let button = null;
    if (option === 'Queue') {
      button = <FriendsButton onClick={this.handleFriendsClick} />;
    } else {
      button = <QueueButton onClick={this.handleQueueClick} />;
    }

    return (<div> 
      {button}
      <WhichSideBar option={option}/>
    </div>);
  }
}

export default SideBar;