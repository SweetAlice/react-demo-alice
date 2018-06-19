require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class ComponentB extends React.Component {
  render() {
    return (
      <div className="header">
        <h4>我是componsB</h4>
      </div>
    );
  }
}

ComponentB.defaultProps = {};

export default ComponentB;
