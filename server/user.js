const express = require("express");
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
// 查询过滤
const _filter = {
    'pwd': 0,
    '__v': 0
}
// MD5加密中间件
const utils = require('utility')
Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
            return res.json(doc);
    })
})
// 查询登录状态
Router.get('/info', (req, res) => {
    const {userId} = req.cookies
    if(!userId){
        return res.json({code: 0})
    }
    User.findOne({_id:userId},_filter,function(err,doc){
        if(err){
            return res.json({code:0,msg:'后端出错了'})
        }
        if(doc){
            return res.json({code:1,data:doc})
        }
    })
   
})
// 注册
Router.post('/register', (req, res) => {
    const {user, pwd, type} = req.body;
    User.findOne({
        user
    }, function (err, doc) {
        if (doc) {
            return res.json({code: 0, msg: '用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
		userModel.save(function(err,doc){
			if (err) {
				return res.json({code:0,msg:'后端出错了'})
			}
			const {user, type, _id} = doc
			res.cookie('userId', _id)
			return res.json({code:1,data:{user, type, _id}})
		})
    })
})
// 登录
Router.post('/login', (req, res) => {
    const {user, pwd} = req.body;
    User.findOne({
        user,
        pwd: md5Pwd(pwd)
    }, _filter, function (err, doc) {
        if (!doc) {
            return res.json({code: 0, msg: '用户名或密码不正确'})
        }
        res.cookie('userId', doc._id)
        return res.json({code: 1, msg: '登陆成功', data: doc})

    })
})
// 更新用户信息
Router.post('/update',function(req,res){
    const {userId} = req.cookies;
    if(!userId){
        return res.json.dumps({code:0})
    }
    const body = req.body;
    User.findByIdAndUpdate(userId,body,function(err,doc){
       const data=Object.assign({},{
           user:doc.user,
           type:doc.type
        },body)
           return res.json({code:1,data})
       });
    })

// md5加密
function md5Pwd(pwd) {
    const salt = 'lipeng_is_cool_nexusLi';
    return utils.md5(utils.md5(pwd + salt));
}
module.exports = Router