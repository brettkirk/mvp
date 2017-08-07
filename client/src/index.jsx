//THIS IS THE CLIENT APPVIEW
const React = require('react');
const ReactDOM = require('react-dom');
import Chat from './components/chat.jsx';
import SideBar from './components/sideBar.jsx';

window.messages = window.messages || [];

console.log(window.messages)

function RenderChat(props) {
  const user = props.user;
  if (!previousUser) {
    var previousUser = user;
  }

  return (<Chat user={props.user}/>);
}

class AppView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Spencer'
    }

    this.handleUserClick = this.handleUserClick.bind(this)
  }

  handleUserClick(user) {
    this.setState({user: user.username});
    console.log(this.state.user)
  }

  render() {
    return (<div>
      <table width="100%">
        <tbody>
        <tr>
          <td width="75%"><RenderChat user={this.state.user}/></td>
          <td id="sidebar" width="25%"><SideBar handleUserClick={(user) => { this.handleUserClick(user) }}/></td>
        </tr>
        </tbody>
      </table>
    </div>);
  }
}

ReactDOM.render(<AppView />, document.getElementById('app'));