require('normalize.css/normalize.css');
require('styles/App.css');
//let yeomanImage = require('../images/yeoman.png');
let menuData = require('../data/leftMenu.json');
//import data from  '../data/leftMenu2.js';
//let imgData = require('../data/imgData.json');
//console.log(menuData)
import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftComponent extends React.Component {
	  //递归函数生成左侧菜单树
    //这里通过函数的形式，通过递归自身function的方式来生成菜单树的子菜单
    formSubmenusChild(obj,sign){
        let cHtml=<div></div>,childArray=obj.subMenu;
//      console.log(obj)
        if("undefined"!=typeof(childArray)&&childArray.length>0) {
          cHtml = childArray.map((item, i) => {
          	      let  underChild =item.subMenu,signTip=""
			          	if("undefined"!=typeof(underChild)&&underChild.length>0) {
					        	signTip = false;
					        }else{
					        	signTip = true;
					        }
			          	return this.formSubmenusChild(item,signTip);
            });
            if(sign){
            	//title={<span><Icon type="mail" /><span>Navigation One</span></span>}//增加图标
			           return <SubMenu key={obj.linkurl} title={<span><Icon type={obj.type}/>{obj.label}</span>}>{cHtml}</SubMenu>
			      }else{
			           return  <MenuItemGroup key={obj.linkurl} title={obj.label} ></MenuItemGroup>	
			      }
           
        }else{
            return <Menu.Item  key={obj.linkurl}>{obj.label}</Menu.Item>
            //routeurl={obj.routerurl}
        }
    }
   
    handleClick(e) {
        console.log('click ', e);
    }
    render() {
//      const {columnMenuInfo,backEndMenuUrl} = this.props;
//      let columnMenus=columnMenuInfo.toJSON();width: 256,height:'calc(100% -  47px)'position:'absolute'
        let leftMenu = {height:'calc(100% -  47px)',position:'absolute',background:"black"}; 
        let html=menuData.map((obj,i)=> {
        	    let childArray = obj.subMenu;
            if ("undefined"!=typeof(childArray)&&childArray.length>0) {
                return this.formSubmenusChild(obj,true);
            }else{
                //这里的routeurl是路由地址，是自定义的一个属性
                return <Menu.Item  key={obj.linkurl} title={obj.label}>{obj.label}</Menu.Item>
                //routeurl={obj.routerurl}
            }
        });
//      console.log(html)
        return (
            <Menu theme="dark" style={leftMenu}
                  onClick={this.handleClick}
                  defaultSelectedKeys={['g4']}
                  selectedKeys={['g4']}
                  defaultOpenKeys={['Nav2']}
                  mode="inline">
                {html}
            </Menu>
        )
    }
}


export default LeftComponent;
// state = {
//	    collapsed: false,
//	  }
//	  toggleCollapsed = () => {
//	    this.setState({
//	      collapsed: !this.state.collapsed,
//	    });
//	  }
// inlineCollapsed={this.state.collapsed}
////            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
//			          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
//			        </Button>