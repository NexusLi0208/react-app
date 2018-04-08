const express = require('express');
const mongoose = require('mongoose');
// 链接mongo 并且使用nexus 集合
const DB_URL = 'mongodb://localhost:27017/nexus';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo conect success');
})
// 类似于mysql的表,mongol里有模型
const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}))
// 新增数据
User.create({
    user: '王东asd晓2',
    age: 16
}, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err);
    }
})

// 删除数据
// User.remove({age:16},function(err,doc){
//     console.log(doc)
// })

// 修改数据
User.update({
    'user': '王东晓'
}, {
    '$set': {
        age: 26
    }
}, function (err, doc) {
    console.log(doc)
})

//新建app
const app = express();
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})
// 返回JSON
app.get('/data', function (req, res) {
    // 查找
    User.find({}, function (err, doc) {
        res.json(doc)
    })
})

app.listen(8086, function () {
    console.log('Node app start at port 8086');
})