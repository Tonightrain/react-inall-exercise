import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className='header'>
            <ul>
            <li><NavLink to = '/timer' className='time' style={{"color":"white","text-decoration":"none"}}>在线倒计时器</NavLink></li>
            <li><NavLink to ='/calculator' className='cal' style={{"color":"white","text-decoration":"none"}}>在线计算器</NavLink></li>
            <li><NavLink to = '/' className='ho' style={{"color":"white","text-decoration":"none"}}>HOME</NavLink></li>
            </ul>
          </nav>
         <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/calculator' component={Calculator}/>
          <Route path='/timer' component={Timer}/>
         </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
