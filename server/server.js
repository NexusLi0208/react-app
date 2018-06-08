
// 服务框架
const express = require("express")
const app = express();
// json处理中间件
const bodyParser = require('body-parser')
// cookie 处理中间件
const cookieParser = require('cookie-parser')
// socket
const server=require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection',function(soccket){
    // console.log('user login')
    soccket.on('sendmsg',function(data){
        io.emit('recvmsg',data)
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
