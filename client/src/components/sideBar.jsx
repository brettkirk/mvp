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

    this.track = '42bX41IUG46ZgfoBORXale';

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
    let head = null;
    if (option === 'Queue') {
      head = <h2>Music Queue</h2>
      button = <FriendsButton onClick={this.handleFriendsClick} />;
    } else {
      head = <h2>Friends List</h2>
      button = <QueueButton onClick={this.handleQueueClick} />;
    }

    let spotifyString = `https://open.spotify.com/embed?uri=spotify:track:${this.track}`

    return (<div> 
      {button}
      {head}
      <iframe src={spotifyString} width="300" height="80" frameBorder="0" allowTransparency="true"></iframe>
      <WhichSideBar option={option}/>
    </div>);
  }
}

export default SideBar;