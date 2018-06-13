import React, {Component} from 'react'
import {Result, List,WhiteSpace,Modal} from 'antd-mobile';
import {connect} from 'react-redux'
import {logoutSubmit} from '../../redux/user.redux'
import browserCookie from 'browser-cookies'
import {Redirect} from 'react-router-dom'
@connect(state => state.user,{logoutSubmit})
export default class User extends Component {
    constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
    logout(){
		const alert = Modal.alert
		alert('注销', '确认退出登录吗???', [
		      { text: '取消', onPress: () => console.log('cancel') },
		      { text: '确认', onPress: () => {
		      	browserCookie.erase('userid')
		      	this.props.logoutSubmit()
		      }}
		    ])
	}
    render() {
        const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt=""/>;
        const props=this.props;
        const Item = List.Item;
        const Brief = Item.Brief
        return props.user?(
            <div>
                <Result
                 img={myImg(require(`../../assets/img/${props.avatar}.png`))}
                    title={props.user}
                    message={props.type==='boss'?props.company:null}/>
                    <List renderHeader={()=>'简介'}>
					<Item multipleLine>
						{props.title}
						{props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
						{props.money?<Brief>薪资:{props.money}</Brief>:null}
					</Item>
				</List> 
				<WhiteSpace></WhiteSpace>
				<List>
					<Item onClick={this.logout}>退出登录</Item>
				</List>
            </div>
        ):<Redirect to={props.redirectTo}/>
    }
}
