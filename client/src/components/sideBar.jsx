//THIS IS THE sidebar component
import React from 'react';
// import Friends from './sideBar/friends.jsx';

var currentSong = {
  name: 'Drop The Game',
  artist: 'Flume, ChetFaker',
  uri: '150zGw0P2EJccYJKnFIler'
};

var friends = [{
      username: 'Spencer',
      password: '13ac71fec7299970',
      salt: '9321bc45aee45fad',
      currentSong: 'Love',
      stream: 'Yes',
      startedAt: 1501958310000
    },
    {
      username: 'Ting',
      password: '13a026bc6a791a00',
      salt: '93275b2bcd793ad1',
      currentSong: 'Gangnam Style',
      stream: 'No',
      startedAt: 0
    },
    {
      username: 'Karun',
      password: '13ab51f0986bcda0',
      salt: '93275b2c2bc9d87a',
      currentSong: 'Cut To Black',
      stream: 'Yes',
      startedAt: 1501958512000
    },
    {
      username: 'Becca',
      password: '13ab51fec7987cd1',
      salt: '93276738baca9ad3',
      currentSong: 'Continuum',
      stream: 'No',
      startedAt: 0
    }];

var list = [{
      name: 'Sleepless',
      artist: 'CAZZETTE',
      uri: '6zWpqo98M9Ai6TK3qmm55o'
    },
    {
      name: 'Closer',
      artist: 'Lemaitre',
      uri: '3h5IIiL9vK5aR0DZO6jD7D'
    },
    {
      name: 'Continuum',
      artist: 'Lemaitre',
      uri: '42bX41IUG46ZgfoBORXale'
    },
    {
      name: 'Imperium',
      artist: 'Madeon',
      uri: '2NRKqJK2nFpr0VHn74EwhV'
    },
    {
      name: 'Coming Over',
      artist: 'Dillon Francis, Kygo, James Hersey',
      uri: '6m3ZWIXhjoV76syT1j2oE9'
    },
    {
      name: 'Professional Griefers - Vocal Mix',
      artist: 'deadmau5, Gerard Way',
      uri: '2sQwrhVWXpZHPIF6YQbUvT'
    },
    {
      name: 'Finale',
      artist: 'Madeon, Nicholas Petricca',
      uri: '0DanGj9TtgZIjJnHdTbW9v'
    }];








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
    return <Queue length={props.length} />;
  }
  return <Friends currentSong={props.currentSong} handleUserClick={(user) => { this.props.handleUserClick(user)}}/>;
}

function Queue(props) {
  const length = props.length;
  if (!previousLength) {
    var previousLength = length;
  }
  const entry = list.map((entry) => 
    <div>
      <h4>{entry.name} - {entry.artist}</h4>
    </div>
  );

  return (<div>{entry}</div>);
}

function Friends(props) {
  const currentSong = props.currentSong;
  if (!previousSong) {
    var previousSong = currentSong;
  }


  const user = friends.map((user) => 
    <table>
    <tbody>
      <tr>
      <td><img src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png" width="32" height="32" /></td>
      <td><tr><span className="name" onClick={() => { this.props.handleUserClick(user)}}>{user.username}</span></tr><tr className="text">{user.currentSong}</tr></td>
      </tr>
    </tbody>
    </table>
  );
  return (<div>
    <div>
      <table>
      <tbody>
        <tr>
        <td><img src="http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png" width="32" height="32" /></td>
        <td><tr><span className="name">Brett</span></tr><tr className="text">{currentSong.name}</tr></td>
        </tr>
      </tbody>
      </table> 
    </div>
    <div>{user}</div>
    </div>
    );
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriendsClick = this.handleFriendsClick.bind(this);
    this.handleQueueClick = this.handleQueueClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    WhichSideBar = WhichSideBar.bind(this);
    Queue = Queue.bind(this);
    Friends = Friends.bind(this);

    this.track = currentSong.uri;

    this.twentyFive = window.innerWidth / 4;

    this.state = {
      option: 'Friends',
      song: currentSong,
      length: list.length
    };
  }

  handleFriendsClick() {
    this.setState({option: 'Friends'});
  }

  handleQueueClick() {
    this.setState({option: 'Queue'});
  }

  handleSkipClick() {
    // console.log(list)
    list = list.reverse();
    currentSong = list.pop();
    // console.log(currentSong)
    list = list.reverse();
    // console.log(this.state.renderList);
    this.setState({song: currentSong});
    this.setState({length: list.length});
    // console.log(this.state.renderList);
    // this.setState({renderList: 0}); 
  }

  render() {

    if (this.twentyFive < 250) {
      this.twentyFive = 250;
    }

    const option = this.state.option;
    const length = this.state.length;

    let button = null;
    let head = null;
    if (option === 'Queue') {
      head = <h2>Music Queue</h2>
      button = <FriendsButton onClick={this.handleFriendsClick} />;
    } else {
      head = <h2>Friends List</h2>
      button = <QueueButton onClick={this.handleQueueClick} />;
    }

    // let spotifyString = `https://open.spotify.com/embed?uri=spotify:track:${this.track}`

    return (<div> 
      {button}
      {head}
      <div><button onClick={this.handleSkipClick}>Skip</button> {length} songs left.</div>
      <iframe src={`https://open.spotify.com/embed?uri=spotify:track:${this.state.song.uri}`} width={this.twentyFive} height="80" frameBorder="0" allowTransparency="true"></iframe>
      <WhichSideBar option={option} length={length} currentSong={this.state.song} handleUserClick={(user) => { this.props.handleUserClick(user)}}/>
    </div>);
  }
}

module.exports.list = list;
export default SideBar;