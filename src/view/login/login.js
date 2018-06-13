import React from 'react'
import Logo from '../../conponents/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import{login} from '../../redux/user.redux'
import From from '../../conponents/form/form'
// function hello(){
//     console.log('hello lipeng')
// }
// function WrapperHello(fn){
//     return function(){
//         console.log('before');
//         fn();  
//         console.log('after');
//     }
// }

// var hello=WrapperHello(hello)
// hello()


@connect(
    state=>state.user,{login}
)
@From

class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     user:'',
        //     pwd:''
        // }
        this.register=this.register.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    register(){
        this.props.history.push("/register");
    }
    handleLogin(){
        this.props.login(this.props.state)
    }
    render() {
        return <div>
          {(this.props.redirectTo&&this.props.redirectTo!=='/login')? <Redirect to={this.props.redirectTo} />:null}
            <Logo></Logo>
            <WingBlank>
                <List>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.props.handleChange('user',v)}>用户
                    </InputItem>
                    <InputItem type='password' onChange={v=>this.props.handleChange('pwd',v)}>密码
                    </InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type='primary' onClick={this.handleLogin}>登录</Button>
                <WhiteSpace></WhiteSpace>
                <Button onClick={this.register} type='primary'>注册</Button>
            </WingBlank>
        </div>
    }
}
export default Login