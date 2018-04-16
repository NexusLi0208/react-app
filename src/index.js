import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// 连接用
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link, Redirect,Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {counter} from './store/index.redux';
const store = createStore(counter, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Route path="/" exact component={App}></Route>
                <Route path="/erying" component={Erying}></Route>
                <Route path="/qibinglian" component={Qibinglian}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();