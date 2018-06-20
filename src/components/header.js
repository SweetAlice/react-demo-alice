require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderComponent extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
  	let Headerstyle ={width:"100%",height:"50px",textAlign:"center",backgroundColor:"#47A400"}
    return (
      <div style={Headerstyle}><h2 style={{color:"white",lineHeight:"50px"}} >header</h2></div>	
    );
  }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
