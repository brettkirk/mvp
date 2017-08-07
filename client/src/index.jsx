//THIS IS THE CLIENT APPVIEW
const React = require('react');
const ReactDOM = require('react-dom');
import Chat from './components/chat.jsx';
import SideBar from './components/sideBar.jsx';

window.messages = window.messages || [];

console.log(window.messages)


class AppView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <table width="100%">
        <tbody>
        <tr>
          <td width="75%"><Chat /></td>
          <td width="25%"><SideBar /></td>
        </tr>
        </tbody>
      </table>
    </div>);
  }
}

ReactDOM.render(<AppView />, document.getElementById('app'));