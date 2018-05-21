import React from 'react';
import ReactDOM from 'react-dom';
import AuthRoute from './conponents/authroute/authroute'
import Register from './view/register/register'
import Login from './view/login/login'
import Bossinfo from './view/bossinfo/bossinfo'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// 连接用
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer'
import './config'
import './index.scss'
const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/bossinfo' component={Bossinfo}/>
                <Route path="/register" exact component={Register}></Route>
                <Route path="/login" exact component={Login}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// 资源缓存,加快获取资源速度
registerServiceWorker(); 