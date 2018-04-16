import React, {Component} from 'react';
// import logo from './logo.svg';
import {Button, List} from 'antd-mobile'
import {addGun, removeGun, addGunAsync} from './store/index.redux'
// import 'antd-mobile/dist/antd-mobile.css'
import './App.css';
import {connect} from 'react-redux';
// App = connect(mapStatetoProps,actionCreators)(App)
@connect(state => ({num: state}), {addGun, removeGun, addGunAsync})

class App extends Component {
  render() {
    let boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <h1>现在有机枪{this.props.num}把</h1>
        <Button onClick={this.props.addGun}>申请武器</Button>
        <Button onClick={this.props.removeGun}>上交武器</Button>
        <Button onClick={this.props.addGunAsync}>拖两天</Button>
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
      solders: ['虎子']
    }
  }
  addNewSolder() {
    this.setState({
      solders: [
        ...this.state.solders,
        '新兵蛋子' + Math.random()
      ]
    })
  }
  render() {
    return (
      <div>
        <h2>一营营长,{this.props.boss}</h2>
        <Button
          type="primary"
          onClick={() => {
          this.addNewSolder()
        }}>新兵入伍</Button>
        <List renderHeader={() => '士兵列表'} renderFooter={() => 'sadsad'}>
          {this
            .state
            .solders
            .map(item => {
              return <List.Item key={item}>{item}</List.Item>
            })}
        </List>
      </div>
    )
  }
}
// 函数式
function House(props) {
  return <h2>骑兵连连长{props.boss}</h2>

}

export default App;