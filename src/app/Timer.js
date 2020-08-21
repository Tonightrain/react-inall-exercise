import React from 'react';
import './timer.less';
import { NavLink } from 'react-router-dom';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            time:0,
            name:'start',
        })
    }

    handleTime = (event) => {
        this.setState({
            time:parseInt(event.target.value)
        })
    }

    tick = () =>{
        const{time} = this.state;
        this.setState({
             time:time-1,
             name:time+' seconds'
        })
        if(time===0){
            this.setState({
                name:'end'
            })
            clearInterval(this.timeId)
        }
    }

    handleClick = ()=>{
        if(this.state.time){
            this.timeId=setInterval(()=>this.tick(),1000)
        }
    }

    render(){
        return(
            <div className='timer'>
                <h1>在线倒计时器</h1>
                <div className="time1">
                    <label>设置时间<input type="text" onChange={this.handleTime}></input></label>
                </div>
                <button value="Start" onClick={this.handleClick}>Start</button>
                <div className="content">
                  <p>{this.state.name}</p>
                </div>
                <div>
                <NavLink to = '/' className='back1' style={{"color":"gray","font-weight":"bold"}}>回到主页</NavLink>
                </div>
            </div>
        )
    }
}

export default Timer;