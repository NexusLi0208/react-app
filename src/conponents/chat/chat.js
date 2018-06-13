
import React, { Component } from 'react'
import {List,InputItem,NavBar} from 'antd-mobile'
// import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
// const socket= io('ws://localhost:8086')
@connect(
    state=>state,
    {getMsgList,sendMsg,recvMsg}
)
export default class Chat extends Component {
    componentDidMount() {
 
        // socket.on('recvmsg',(data)=>{
        //     console.log(data)
        //    this.setState({msg:[...this.state.msg,data.text]})
        //    console.log(this.state.msg);
        // })
     }
     handleSubmit(){
    //    socket.emit('sendmsg',{text:this.state.text})
        const from =this.props.user._id;
        const to = this.props.match.params.user;
        const msg =this.state.text;
        this.props.sendMsg({from,to,msg}) 
        this.setState({text:''})    
 }
     constructor(props){
         super(props)
         this.state={
             text:"",
             msg:[]
         }
         this.handleSubmit=this.handleSubmit.bind(this)
     }
    render() {
        const user= this.props.match.params.user;
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            <div className="chat-page">
            <NavBar mode='dark'>{this.props.match.params.user}</NavBar>
          
            {this.props.chat.chatmsg.map(v=>{
                // return <p key={v._id}>{v.content}</p>
                return v.from===user?(
                    // <p key={v._id}>对方发来的：</p>
                    <List key={v._id} renderHeader={() => '对方消息'} >
                      <Item  extra={new Date(v.creat_time).toLocaleString()} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                      Title <Brief>{v.content}</Brief>
                      </Item>
                  </List>
                ):(
                    <List key={v._id} renderHeader={() => '我的消息'} className="my-list">
                        <Item className="chat-me"  extra={new Date(v.creat_time).toLocaleString()} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                         Title <Brief>{v.content}</Brief>
                        </Item>
                    </List>
                )
            })}
            <div className="chat-input">
               <List>
                   <InputItem
                   placeholder='请输入'
                   value={this.state.text}
                   onChange={v=>{
                       this.setState({text:v})
                   }}
                   extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
                   ></InputItem>
               </List>
            </div>
            </div>
        )
    }
}
