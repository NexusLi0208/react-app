import React from 'react';
import ReactDOM from 'react-dom';
import AuthRoute from './conponents/authroute/authroute'
import Dashboard from './conponents/dashboard/dashboard'
import Register from './view/register/register'
import Login from './view/login/login'
import Bossinfo from './view/bossinfo/bossinfo'
import Geniusinfo from './view/geniusinfo/geniusinfo'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// 连接用
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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
                <Switch>
                    <Route path='/bossinfo' component={Bossinfo}></Route>
                    <Route path='/geniusinfo' component={Geniusinfo}></Route>
                    <Route path="/register" exact component={Register}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// 资源缓存,加快获取资源速度
registerServiceWorker();