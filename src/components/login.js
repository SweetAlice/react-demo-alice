import React from 'react';
//import { Form, Icon, Input, Button, Checkbox } from 'antd';
//import isLogin from "../utils/isLogin";
//const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  constructor(props){
    super();
    this.login = this.login.bind(this);
//  isLogin();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.login(values);
      }
    });
  }
  login(data){
    console.log('data',data);
    sessionStorage.setItem("loginInfo","1");
    location.href = "/#/main";
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<p style={{ width: "100%",height:"100%",backgroundColor:"red" }}>登录界面</p>
//    <Form onSubmit={this.handleSubmit}>
//      <FormItem>
//        {getFieldDecorator('userName', {
//          rules: [{ required: true, message: '请输入用户名!' }],
//        })(
//          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
//          )}
//      </FormItem>
//      <FormItem>
//        {getFieldDecorator('password', {
//          rules: [{ required: true, message: '请输入密码!' }],
//        })(
//          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
//          )}
//      </FormItem>
//      <FormItem>
//        {getFieldDecorator('remember', {
//          valuePropName: 'checked',
//          initialValue: true,
//        })(
//          <Checkbox>记住密码</Checkbox>
//          )}
//        <a style={{ float:"right" }} href="">忘记密码</a>
//        <Button style={{ width: "100%" }} type="primary" htmlType="submit" >
//          登录
//        </Button>
//        没有账号
//        <a href="">立即注册</a>
//      </FormItem>
//    </Form>
    );
  }
}

const LoginFrom = Form.create()(NormalLoginForm);

export default LoginFrom;