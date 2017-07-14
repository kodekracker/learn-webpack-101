import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import IFrame from 'react-frame-component';
import styles from './app.css';

function getFrameContent(cssStyle) {
  console.log("Loading iframe content");
  console.log(cssStyle);
  const content = `<!DOCTYPE html><html><head>
    <style id="chatbot-stylesheet" type="text/css">${cssStyle}</style>
    </head><body><div></div></body></html>`;
  return content;
}

class App extends Component {
  static props = {
    cssStyle: PropTypes.string
  };

  render() {
    const {cssStyle} = this.props;
    const frameContent = getFrameContent(cssStyle);
    return (<div className="chatbot-app chatbot-app-launcher-enabled">
      <span></span>
      <IFrame initialContent={frameContent} className="chatbot-launcher-frame" allowFullScreen>
        <div styleName="intro">React is working.</div>
      </IFrame>
      <span></span>
    </div>);
  }
}

export default CSSModules(App,styles);