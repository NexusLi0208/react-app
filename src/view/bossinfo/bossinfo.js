import React, {Component} from 'react'
import {
    NavBar,
    Icon,
    Button,
    TextareaItem,
    InputItem,
    WingBlank,
    WhiteSpace
} from 'antd-mobile';
import AvatarSelector from '../../conponents/avatar-selector/avatar-selector';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
@connect(state => state.user, {update})

export default class BossInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: ''
        }
    }
    onChange(key, val) {
        this.setState({[key]: val})
    }
    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            
            <div>
                {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
                <NavBar mode="dark">完善boss信息</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                    this.setState({avatar: imgname})
                }}></AvatarSelector>
                <InputItem
                    onChange={(v) => {
                    this.onChange('title', v)
                }}>
                    招聘职位</InputItem>
                <InputItem
                    onChange={(v) => {
                    this.onChange('company', v)
                }}>
                    公司名称</InputItem>
                <InputItem
                    onChange={(v) => {
                    this.onChange('money', v)
                }}>
                    职位薪资</InputItem>
                <TextareaItem
                    title='职位要求'
                    rows='3'
                    onChange={(v) => {
                    this.onChange('desc', v)
                }}></TextareaItem>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button onClick={()=>{
                        this.props.update(this.state)
                    }} type='primary'>保存</Button>
                </WingBlank>
            </div>
        )
    }
}
