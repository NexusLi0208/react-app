
// 服务框架
const express = require("express")
const app = express();
const model = require('./model');
// const User = model.getModel('user');
const Chat=model.getModel('chat');
// json处理中间件
const bodyParser = require('body-parser')
// cookie 处理中间件
const cookieParser = require('cookie-parser')
// socket
const server=require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection',function(socket){
    console.log('user login')
    socket.on('sendmsg',function(data){
    const {from,to,msg}=data.from;
    const chatid =[from,to].sort().join('_')
    // console.log(data)
    Chat.create({chatid,from,to,content:msg},function(err,doc){
        console.log(doc._doc)
        io.emit('recvmsg',Object.assign({},doc._doc))
    })
    })
})
// 路由中间件
const userRouter = require("./user");
//新建app

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter);
server.listen(8086, function () {
    console.log('Node app start at port 8086');
})
