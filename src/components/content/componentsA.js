require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class ComponentA extends React.Component {
  render() {
    return (
      <div className="header">
        <h4>我是componsA</h4>
      </div>
    );
  }
}

ComponentA.defaultProps = {};

export default ComponentA;
