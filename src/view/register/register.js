import React from 'react'
import Logo from '../../conponents/logo/logo'
import {
    List,
    InputItem,
    WingBlank,
    Radio,
    WhiteSpace,
    Button
} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/user.redux'
const RadioItem = Radio.RadioItem;
@connect(
    state=>state.user,{register}
)


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type: 'genius'
                         
        }
        this.login = this.login.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
    }
    login() {
        console.log(this.props);
        this.props.history.push("/login");
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        console.log(this.state)
        this.props.register(this.state)
    }
    render() {
        return <div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
            <Logo></Logo>
            <WingBlank>
                <List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                    <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    <InputItem type="password" onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <RadioItem onChange={()=>this.handleChange('type','genius')} checked={this.state.type === 'genius'}>牛人</RadioItem>
                    <RadioItem onChange={()=>this.handleChange('type','boss')} checked={this.state.type === 'boss'}>Boss</RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type="primary" onClick={()=>{this.handleRegister()}}>注册</Button>
            </WingBlank>
        </div>
    }
}
export default Register