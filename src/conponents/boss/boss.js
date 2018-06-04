import React, {Component} from 'react'
import Usercard from '../usercard/usercard'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'

@connect(state => state.chatuser, {getUserList})
export default class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.props.getUserList('genius')
    }

    render() {
        console.log(this.props.userlist)
        // return <h2>asdasd</h2>
        return <Usercard userlist={this.props.userlist}></Usercard>
    }
}
