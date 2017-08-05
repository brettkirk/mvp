//THIS IS THE friends list component
import React from 'react';
import Friend from './friend.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);

    this.track = '42bX41IUG46ZgfoBORXale'
  }


  render() {

    var spotifyString = `https://open.spotify.com/embed?uri=spotify:track:${this.track}`

    return (<div>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>);
  }
}

export default Friends;