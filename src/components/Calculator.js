/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const buttons = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

class CalcUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const newState = calculate(this.state, buttonName);
    this.setState((previousState) => ({
      ...previousState,
      ...newState,
    }));
  };

  render() {
    return (
      <div className="divCalculator">
        <div className="divResult">
          {this.state.next || this.state.total || 0}
        </div>
        <div className="divButtons">
          {buttons.map((btn) => (
            <Button clickHandler={this.handleClick} key={btn.id} value={btn} />
          ))}
        </div>
      </div>
    );
  }
}

export default CalcUI;
