import React from 'react';
import './calculator.less';
import { NavLink } from 'react-router-dom';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }

    handleClick = (event) => {
        this.setState({
            result:this.state.result+event.target.value
        })
    }

    handleCalculate = (event) => {
        if(this.state.result === ''){
            alert("Please enter numbers");
        }else{
            this.setState({
                result:eval(this.state.result)
            })
        }
    }

    handleClear = (event) => {
        this.setState({
            result:''
        })
    }

    render(){
        return(
        <div className="cal">
            <div className='calculator'>
                <form action="#" name="form">
                    <div className="result">
                        <input type="text" name="disp" id="disp" value={this.state.result}></input>
                    </div>
                    <div className="buttons">
                        <div className="row">
                            <input type="button" value="7" name="v7" onClick={this.handleClick}></input>
                            <input type="button" value="8" name="v8" onClick={this.handleClick}></input>
                            <input type="button" value="9" name="v9" onClick={this.handleClick}></input>
                            <input type="button" value="+" name="add" onClick={this.handleClick}></input>
                        </div>
                        <div className="row">
                            <input type="button" value="4" name="v4" onClick={this.handleClick}></input>
                            <input type="button" value="5" name="v5" onClick={this.handleClick}></input>
                            <input type="button" value="6" name="v6" onClick={this.handleClick}></input>
                            <input type="button" value="-" name="sub" onClick={this.handleClick}></input>
                        </div>
                        <div className="row">
                            <input type="button" value="1" name="v1" onClick={this.handleClick}></input>
                            <input type="button" value="2" name="v2" onClick={this.handleClick}></input>
                            <input type="button" value="3" name="v3" onClick={this.handleClick}></input>
                            <input type="button" value="*" name="mul" onClick={this.handleClick}></input>
                        </div>
                        <div className="row">
                            <input type="button" value="0" name="v0" onClick={this.handleClick}></input>
                            <input type="button" value="clear" name="vdot" onClick={this.handleClear}></input>
                            <input type="button" value="/" name="vdiv" onClick={this.handleClick}></input>
                            <input type="button" value="=" name="veql" title="click two times to clear" onClick={this.handleCalculate}></input>
                        </div>
                    </div>
                </form>
            </div>
            <NavLink to = '/' className='back' style={{"color":"gray","font-weight":"bold"}}>回到主页</NavLink>
        </div>
        )
    }
}

export default Calculator;