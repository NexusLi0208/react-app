// 服务框架
const express = require("express")
// json处理中间件
const bodyParser = require('body-parser')
// cookie 处理中间件
const cookieParser = require('cookie-parser')
// 路由中间件
const userRouter = require("./user");
//新建app
const app = express();
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter);
app.listen(8086, function () {
    console.log('Node app start at port 8086');
})
