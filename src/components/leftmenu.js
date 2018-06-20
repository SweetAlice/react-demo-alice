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
        let cHtml=<div></div>,childArray=obj.subMenu
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
            	//title={<span><Icon type="mail" /><span>Navigation One</span></span>}
            	//title={obj.label}><Icon type={obj.type}/> {cHtml}</SubMenu>
			           	return <SubMenu key={obj.linkurl} title={obj.label} >{cHtml}</SubMenu>
			      }else{
			           return  <MenuItemGroup key={obj.linkurl} title={obj.label}></MenuItemGroup>	
			      }
           
        }else{
            return <Menu.Item  key={obj.linkurl}>{obj.label}</Menu.Item>
            //routeurl={obj.routerurl}
        }
    }
    handleClick(e) {
        console.log('click ', e);
//      const {actions}=this.props;
//
//      let menuInfo={
//          //打印antd Menu组件的onClick返回值（e）可以看出通过e.item.props来获取我们item组件的自定义属性
//          routeurl:e.routeurl,
//          url: e.key,
//          target:'mainFrame'
//      }
//      //根据route路由地址和iframe地址的值判断使用哪个作为菜单页面展示方式
//      actions.onLoadMain(menuInfo);
    }
    render() {
//      const {columnMenuInfo,backEndMenuUrl} = this.props;
//      let columnMenus=columnMenuInfo.toJSON();
        let leftMenu = {width: 256,height:'calc(100% -  47px)',position:'absolute'};
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

        return (
            <Menu theme="dark"
                onClick={this.handleClick}
                  style={leftMenu}
                  defaultOpenKeys={['Nav2']}
                  selectedKeys={["g3sub1"]}
                  mode="inline"
            >
                {html}
            </Menu>
        )
    }
}

//function mapStateToProps(state) {
//  const {middleTheme} = state;
//  return {
//      backEndMenuUrl: middleTheme.get('backEndMenuUrl'),
//      columnMenuInfo:middleTheme.get('columnMenuInfo')
//  }
//}
//
//function mapDispatchToProps(dispatch) {
//  return {
//      actions: bindActionCreators(themeActions, dispatch)
//  };
//}

	
	
	
//	

//render() {
//	let leftMenu = {width: 256,height:'calc(100% -  47px)',position:'absolute'};
//  return (
//    
//    	<Menu
//      onClick={this.handleClick}
//      style={leftMenu}
//      defaultSelectedKeys={['0']}
//      defaultOpenKeys={['sub0']}
//      mode="inline"
//      >
//    	 <Menu.Item key="mail">
//        <Icon type="mail" />Navigation One
//      </Menu.Item>
//      
//			      {menuData.map(function(item,index){
//			      	console.log(item,index)
//			      	
//				      	   <SubMenu key={index} title={<span><Icon type={item.type} /><span>{{item.menuTitle}}</span></span>}>
//					            {item.subMenu.map(function(item2,index2){
//					            	console.log(item2,index2)
//					            	    <MenuItemGroup key={index2.link} title={item2.label}>
//						            	    {item2.subMenu.map(function(item3,index3){
//						            	    	  <Menu.Item key={index3.link}>{{item3.label}}</Menu.Item>
//						            	    })}
//							               </MenuItemGroup>
//					            })} 
//				            </SubMenu>
//						})}
//			      
//			  </Menu>
//  );
// }
//}

export default LeftComponent;
