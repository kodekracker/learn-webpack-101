import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function init(e) {
  console.log(e);
  const cssDiv = document.getElementById('chatbot-stylesheet');
  console.log("Welcome to chatbot");
  function Client(options) {
    const chatbotDiv = document.createElement('div');
    chatbotDiv.style.position = 'fixed';
    chatbotDiv.style.bottom = 0;
    chatbotDiv.style.right = 0;
    chatbotDiv.style.zIndex = 999999999;
    chatbotDiv.setAttribute('id', 'chatbot-container');
    document.body.appendChild(chatbotDiv);

    ReactDOM.render(<App cssStyle={cssDiv.innerText}/>,
      document.getElementById('chatbot-container'));
  }

  window.Client = Client;
  Client();
}

if(window.attachEvent) {
  window.attachEvent('onload', init);
} else {
  if(window.onload) {
    const curronload = window.onload;
    const newonload = function(evt) {
      curronload(evt);
      init(evt);
    };
    window.onload = newonload;
  } else {
    window.onload = init;
  }
}