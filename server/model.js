// 数据库
const mongoose = require("mongoose")
// 链接mongo 并且使用nexus 集合
const DB_URL = 'mongodb://localhost:27017/nexus';
mongoose.connect(DB_URL);
// 建立模型
const models={
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
        //头像
        'avatar':{'type':String},
        // 个人简介
        'desc':{'type':String},
        // 职务名
        'title':{'type':String},

        // boss
        'company':{'type':String},
        'money':{'type':String}

    },
    chat:{

    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports={
    getModel:function(name){
       return mongoose.model(name)
    }
}