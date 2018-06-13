import React, {Component} from 'react'
import {NavBar} from 'antd-mobile';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMsgList,recvMsg} from '../../redux/chat.redux'
import NavLinkBar from '../navlinkbar/navlinkbar'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'

function Msg() {
    return <h2>Msg</h2>
}
// function Index() {
//     return <h2>首页</h2>
// }
@connect(state => state,{getMsgList,recvMsg})
export default class Dashboard extends Component {

componentDidMount() {
    this.props.getMsgList();
    this.props.recvMsg()
}

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {pathname} = this.props.location;
        const user = this.props.user;
        const navList = [

            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                hide: user.type === 'genius',
                component: Boss
            }, {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                hide: user.type === 'boss',
                component: Genius
            }, {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            }, {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }, {
                path: '/',
                text: '首页',
                icon: 'boss',
                title: '首页',
                hide: true,
                // component: Index
            }
        ]
        return (
            <div>
                <NavBar className='fixd-header' mode='dard'>{navList.find(v => v.path === pathname).title}</NavBar>
                <div style={{ marginTop: 45}}>
                    <Switch>
                        {navList.map(v => (<Route key={v.path} path={v.path} component={v.component}/>))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}
