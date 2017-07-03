import _ from 'lodash';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './main';

function App() {
  return <div>React is working.</div>;
}

ReactDOM.render(<App />, document.getElementById('react-root'));

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack-101'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());