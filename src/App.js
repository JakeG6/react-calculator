import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorDisplay: 0,
      operand: 0,
      operator: '',
      newNumber: true
    };

    this.toDisplay = this.toDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.operate = this.operate.bind(this);
    this.equals = this.equals.bind(this);
  }

  toDisplay(x) {
    if (this.state.calculatorDisplay.length == 13) {
      return;
    }
    else {
      if (this.state.newNumber === true) {
    		this.setState( {calculatorDisplay: x.toString()} );
    		this.setState( {newNumber: false} );
    	}
    	else {
    		this.setState( {calculatorDisplay: this.state.calculatorDisplay + x.toString() } );
    	}
    }
  }

  setOperator(x) {
    this.operate();
    this.setState( {operator: x} );
    this.setState( {newNumber: true} );
  }

  operate() {
    if ( this.state.operator === '' ) {
      this.setState({newNumber: true});
      this.setState({operand: parseInt(this.state.calculatorDisplay)});
      return;
    }

    var result;

    switch ( this.state.operator ) {
      case '+':
        result = this.state.operand + parseInt(this.state.calculatorDisplay, 10);

        break;
      case '-':
        result = this.state.operand - parseInt(this.state.calculatorDisplay, 10);

        break;
      case '*':
        result = this.state.operand * parseInt(this.state.calculatorDisplay, 10);

        break;
      case '/':
        result = this.state.operand / parseInt(this.state.calculatorDisplay, 10);

        break;
      default:
        break;
    }

    this.setState( {calculatorDisplay: String(result)} );
    this.setState( {operand: result} );
    this.setState( {newNumber: true} );
  }

  equals() {
    this.operate();
    this.setState( {operand: 0, operator: ''} );
  }

  clearDisplay() {
    this.setState( {calculatorDisplay: 0, operator: '', operand: 0, newNumber: true } );
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-body">
          <p className="calculator-display">{this.state.calculatorDisplay}</p>
          <div className="calculator-buttons blue-suede">
            <div className="button pink-punk" onClick={() => this.toDisplay(7)}>7</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(8)}>8</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(9)}>9</div>
            <div className="button rich-purple" onClick={() => this.setOperator('+')}>+</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(4)}>4</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(5)}>5</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(6)}>6</div>
            <div className="button rich-purple" onClick={() => this.setOperator('-')}>-</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(1)}>1</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(2)}>2</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(3)}>3</div>
            <div className="button rich-purple" onClick={() => this.setOperator('*')}>X</div>
            <div className="button pink-punk" onClick={() => this.toDisplay(0)}>0</div>
            <div className="button rich-purple" onClick={ () => this.equals() }>=</div>
            <div className="button rich-purple" onClick={() => this.clearDisplay()}>C</div>
            <div className="button rich-purple" onClick={() => this.setOperator('/')}>/</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
