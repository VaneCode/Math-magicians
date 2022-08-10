/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

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
  render() {
    return (
      <div className="divCalculator">
        <div className="divResult">0</div>
        <div className="divButtons">
          {buttons.map((btn) => (
            <Button key={btn.id} value={btn} />
          ))}
        </div>
      </div>
    );
  }
}

export default CalcUI;
