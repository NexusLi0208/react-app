import axios from 'axios'
import {getRedirectPath} from '../util'
const ERROR_MSG = 'ERROR_MSG'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo: '',
    isAuth: '',
    msg: '',
    user: '',
    type: ''
}
//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                msg: '',
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case ERROR_MSG:
            return {
                ...state,
                isAuth: false,
                msg: action.msg
            }
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
function authSuccess(data) {
    return {type: AUTH_SUCCESS, payload: data}
}
function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}
export function loadData(userInfo) {
    return {type: 'LOAD_DATA', payload: userInfo}
}
export function userInfo() {
    return dispatch => {
        axios
            .get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    if (res.data.code !== 0) {} else {
                        this
                            .props
                            .loadData(res.data.data)
                        this
                            .props
                            .history
                            .push('/login')
                    }
                }
            })
    }

}
export function login({user, pwd}) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios
            .post('/user/login', {user, pwd})
            .then(res => {
                if (res.status === 200 && res.data.code === 1) {
                    // dispatch(registerSuccess({user,pwd}))
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
// 更新用户信息
export function update(data) {
    return dispatch => {
        axios
            .post('/user/update', data)
            .then(res => {
                if (res.status === 200 && res.data.code === 1) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch()
                }
            })
    }
}
export function register({user, pwd, repeatpwd, type}) {
    console.log(user)
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('两次密码必须相同')
    }
    return dispatch => {
        axios
            .post('/user/register', {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 1) {
                    dispatch(authSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}