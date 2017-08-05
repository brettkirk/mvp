//THIS IS THE friends list component
import React from 'react';
import Friend from './friend.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Friends</h2>
      <iframe src="https://open.spotify.com/embed?uri=spotify:track:3F4M4IaluOCuLto737CRXq#1:13" width="300" height="80" frameBorder="0" allowTransparency="true"></iframe>
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