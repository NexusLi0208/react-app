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
import From from '../../conponents/form/form'
const RadioItem = Radio.RadioItem;

@connect(
    state=>state.user,{register}
)
@From

class Register extends React.Component {
    constructor(props) {
        super(props);
 
        this.login = this.login.bind(this);
        this.handleRegister=this.handleRegister.bind(this);
    }
    
    componentDidMount() {
        this.props.handleChange('type','genius')
    }
    
    login() {
        console.log(this.props);
        this.props.history.push("/login");
    }
    handleRegister(){
        console.log(this.state)
        this.props.register(this.props.state)
    }
    render() {
        return <div>
             {(this.props.redirectTo&&this.props.redirectTo!=='/login')? <Redirect to={this.props.redirectTo} />:null}
            <Logo></Logo>
            <WingBlank>
                <List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                    <InputItem type="password" onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                    <InputItem type="password" onChange={v=>this.props.handleChange('repeatpwd',v)}>确认密码</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <RadioItem onChange={()=>this.props.handleChange('type','genius')} checked={this.props.state.type === 'genius'}>牛人</RadioItem>
                    <RadioItem onChange={()=>this.props.handleChange('type','boss')} checked={this.props.state.type === 'boss'}>Boss</RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type="primary" onClick={()=>{this.handleRegister()}}>注册</Button>
            </WingBlank> 
        </div>
    }
}
export default Register