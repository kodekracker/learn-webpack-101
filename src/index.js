import _ from 'lodash';
import './index.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack-101'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());