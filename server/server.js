// 服务框架
const express = require("express")

// 路由中间件
const userRouter = require("./user");
//新建app
const app = express();
app.use('/user',userRouter);
app.listen(8086, function () {
    console.log('Node app start at port 8086');
})
