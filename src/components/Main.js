
import React from 'react';

import Header from './header';
import Leftmenu from './leftmenu';

//let yeomanImage = require('../images/yeoman.png');
//let imgData = require('../data/imgData.json');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
	       <Header/>
	       <Leftmenu/>
	       
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
