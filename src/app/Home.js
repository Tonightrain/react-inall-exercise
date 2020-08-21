import React from 'react';
import './home.less';
import hero from '../images/hero-image.png';
import calculator from '../images/calculator.png';
import timer from '../images/timer.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
  <div className="home">
    <div className="part1">
    <img className="hero" src={hero} alt="hero"  />
    <h1>在线实用工具</h1>
    </div>
    <div className="part2">
    <img className="cal" src={calculator} alt="cal"/>
    <img className="ti" src={timer} alt="timer" />
    </div>
    <div className="part3">
    <NavLink className="c" to ='/calculator'>计算器</NavLink>
    <NavLink className="t"  to ='/timer' >倒计时器</NavLink>
    </div>
  </div>

  );
};

export default Home;