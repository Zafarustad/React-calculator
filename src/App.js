import React, { Component } from 'react';
import './App.css';
import { Button, Operator} from './Components/Button';
import  { Input }  from './Components/Input';
import { Clearbtn, Backbtn } from './Components/Control';
import * as math from 'mathjs';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      input: ''
    };
  }
  
  
  
  addToInput = (value) => {
    this.setState({ input: this.state.input + value });
  };

  handleEqual = () => {
      this.setState({input: math.eval(this.state.input)})
  };                            
  
  del = ()  => {
   this.setState({input:''})
 };

 removeLastElement = () => {
   this.setState({input: this.state.input.slice(0, -1)})
 };
  
 render() {
   return (
     <div className="App">
       <div className="Wrapper">
          <Input input={this.state.input}/>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button> 
            <Button handleClick={this.addToInput}>9</Button> 
            <Operator handleClick={this.addToInput}>/</Operator>      
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button> 
            <Button handleClick={this.addToInput}>6</Button> 
            <Operator handleClick={this.addToInput}>*</Operator>      
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Operator handleClick={this.addToInput}>+</Operator>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Operator handleClick={this.addToInput}>.</Operator>
            <Operator handleClick={this.addToInput}>-</Operator>
            <Operator handleClick={this.handleEqual}>=</Operator>
          </div>
          <div className="control">
            <Clearbtn clearInput={this.del}> Clear </Clearbtn>
            <Backbtn undo={this.removeLastElement}>Back</Backbtn>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
