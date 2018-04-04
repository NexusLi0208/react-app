import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {createStore} from 'redux'; class App extends Component {   render() {
//     return (       <div className="App">         <header
// className="App-header">           <img src={logo} className="App-logo"
// alt="logo" />           <h1 className="App-title">Welcome to React</h1>
// </header>         <p className="App-intro">           To get started, edit
// <code>src/App.js</code> and save to reload.         </p>       </div>     );
// } } export default App;
class App extends Component {
  render() {
    let boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <CampOne boss="张大彪"></CampOne>
        <House boss="大鸟"></House>
      </div>
    )
  }
}
// 组件式
class CampOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '王东晓', '小智障']
    }
  }
  render() {
    return (
      <div>
        <h2>一营营长,{this.props.boss}</h2>
        <ul>
          {
            this.state.solders.map(item=>{
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
// 函数式
function House(props) {
  return <h2>骑兵连连长{props.boss}</h2>
}

export default App;