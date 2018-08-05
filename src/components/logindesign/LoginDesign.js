import React, { Component } from 'react';
import {Input,Button,Form,Modal} from 'antd'
import 'antd/dist/antd.css';

const FormItem = Form.Item 
class LoginDesign extends Component{
    state={
        visible:false,
        Lusername:'',//登录
        Lpassword:'',//登录
        username:'',// 注册
        password:'',//注册
        repassword:'',
        users:[]
    }

Login() {
    if(this.state.Lusername!==''&& this.state.Lpassword!=='') {
        console.log('登录')
        console.log(this.state.Lusername)
        console.log(this.state.Lpassword)
    }
}
Design() {
    console.log('注册')
    this.setState({
        visible:true
    })
}
handleOk() {
    var newJson={"username":this.state.username,"password":this.state.password}
    if(this.state.password===this.state.repassword) {
        var newUsers=this.state.users
        newUsers.push(newJson)
        this.setState({
            users:newUsers
        })
        console.log(this.state.users)
    }
}
getLoginInputValue() {
 // 获取登录的数据
    var getLUsername=this.refs.Lusername.input.value
    var getLPassword=this.refs.Lpassword.input.value
    this.setState({
        Lusername:getLUsername,
        Lpassword:getLPassword
    })
}
getInputValue() {
     
    // 获取注册的数据
    var getUsername=this.refs.username.input.value
    var getPassword=this.refs.password.input.value
    var getrePassword=this.refs.repassword.input.value
    
  
    this.setState({
        // Lusername:getLUsername,
        // Lpassword:getLPassword,
        username:getUsername,
        password:getPassword,
        repassword:getrePassword,
        
    })
}
    render () {
        return (
            <div className="LDContainer">
                <Form>
                        <FormItem>
                            <Input placeholder="请输入用户名" ref="Lusername" onChange={()=>this.getLoginInputValue()}/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" ref="Lpassword" onChange={()=>this.getLoginInputValue()}/>
                        </FormItem>
                </Form>
                <Modal title="注册" visible={this.state.visible} onCancel={()=>this.setState({visible:false})}
          onOk={()=>this.handleOk()}>
                    <Form>
                        <FormItem>
                            <Input placeholder="请输入用户名" ref="username" onChange={this.getInputValue.bind(this)}/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" ref="password" onChange={this.getInputValue.bind(this)}/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请确认密码" ref="repassword" onChange={this.getInputValue.bind(this)}/>
                        </FormItem>
                    </Form>
                </Modal>
                <Button onClick={()=>this.Login()}>登录</Button>
                <Button onClick={()=>this.Design()}>注册</Button>
            </div>
        )
    }
}
export default LoginDesign;