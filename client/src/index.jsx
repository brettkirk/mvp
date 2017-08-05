//THIS IS THE CLIENT APPVIEW
const React = require('react');
const ReactDOM = require('react-dom');

//TODO
//make a table later that includes a chat column and a sidebar column

class AppView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Hello, world!</h1>
    </div>);
  }
}

ReactDOM.render(<AppView />, document.getElementById('app'));