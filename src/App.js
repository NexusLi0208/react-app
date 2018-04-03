import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {createStore} from 'redux';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
class App extends React.Component{
  render(){
    let boss='李云龙'
    return (
      <div>
         <h2>独立团，团长{boss}</h2>
         <一营></一营>
      </div>
    )
  }
}

class 一营 extends React.Component{
  render(){
    let boss='张大彪'
    return <h2>一营营长,{boss}</h2>
  }
}

export default App;