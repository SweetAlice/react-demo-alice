
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;


//import HeaderContent from './header';
import Leftmenu from './leftmenu';

//let yeomanImage = require('../images/yeoman.png');
//let imgData = require('../data/imgData.json');
////	      <HeaderContent/>
class AppComponent extends React.Component {
	
  render() {
  	let leftStyle= {minHeight:'calc(100% -  64px)',position:"absolute"},
        logoStyle ={width: "200px",height: "64px",background:"url(../images/16.jpg) no-repeat",backgroundSize:"100% 100%",float:" left"},
        divStyle ={width:"calc(50% - 100px)",height:"64px",float:"left",textAlign:"right",padding:'0 50px'},
        divoutStyle ={width:"calc(50% - 100px)",height:"64px",float:"left",textAlign:"right",padding:"0 50px"}
    return (
	  <Layout>
	      <Header className="header" style={{padding:0,width:'100%',height:"64px",background:"black",clear:"both"}}>
		      <div className="logo" style={logoStyle}/>
		      <div style={{padding:0,margin:0,color:"white",width:"calc(100% - 200px)",height: "64px",lineHeight: "64px",float: "left"}}>
		        <div style={divStyle}>header</div>
		        <div style={divoutStyle}>退出</div>
		      </div>
	      </Header>
		    <Layout>
	           <Sider width={200} style={leftStyle}>
	               <Leftmenu/>
	           </Sider>
	        <Layout style={{ padding: '0 24px 24px',marginLeft: "200px",height: 'calc(100% - 130px)',position: 'absolute',width: 'calc(100% - 300px)'}}>
		        <Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>Home</Breadcrumb.Item>
		          <Breadcrumb.Item>List</Breadcrumb.Item>
		          <Breadcrumb.Item>App</Breadcrumb.Item>
		        </Breadcrumb>
		        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight:'calc(100% - 64px)',width: '100%' }}>
		          Content
		        </Content>   
		      </Layout>
        </Layout>
  	</Layout>
    );
  
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
