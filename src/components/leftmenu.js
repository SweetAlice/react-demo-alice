require('normalize.css/normalize.css');
require('styles/App.css');
//let yeomanImage = require('../images/yeoman.png');
let menuData = require('json!../data/leftMenu.json');
//import data from  '../data/leftMenu2.js';
//let imgData = require('../data/imgData.json');
console.log(menuData)

import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftComponent extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
  	let leftMenu = {width: 256,height:'calc(100% -  47px)',position:'absolute'};
    return (
      { 
      	<Menu
        onClick={this.handleClick}
        style={leftMenu}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub0']}
        mode="inline"
        >
			    return { menuData.map(function(item, index){
				      	    <SubMenu key="sub{index}" title={<span><Icon type="{item.type}" /><span>{{item.menuTitle}}</span></span>}>
				            {item.subMenu.map(function(item2,index2){
				            	    <MenuItemGroup key="g{index2}" title="{item2.label}">
					            	    {item2.subMenu.map(function(item3,index3){
					            	    	  <Menu.Item key="index3">{{item3.label}}</Menu.Item>
					            	    })}
						               </MenuItemGroup>
				            })} 
				            </SubMenu>
						})}
	      </Menu>
      }
    );
  }
}

export default LeftComponent;
