import React, {Component} from 'react';
import './app.css';

const divStyle = {
  fontSize: '1.2em'
};

class App extends Component {
  render() {
    return ( <div className="intro" style={divStyle}>React is working.</div> );
  }
}

export default App;