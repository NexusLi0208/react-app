
import React, { Component } from 'react'
import {List,InputItem} from 'antd-mobile'
import io from 'socket.io-client'
import { spawn } from 'child_process';
const socket= io('ws://localhost:8086')
socket.on('recvmsg',function(data){
    console.log(data)
})
export default class Chat extends Component {
    componentDidMount() {
        console.log(1);
  
     }
     handleSubmit(){
       socket.emit('sendmsg',{text:this.state.text})
        this.setState({text:''})
     }
     constructor(props){
         super(props)
         this.state={
             text:""
         }
         this.handleSubmit=this.handleSubmit.bind(this)
     }
    render() {
        return (
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
        )
    }
}
