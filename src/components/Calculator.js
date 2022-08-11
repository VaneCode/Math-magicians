/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
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

const CalcUI = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState((previousState) => ({
      ...previousState,
      ...newState,
    }));
  };

  return (
    <div className="divCalculator">
      <div className="divResult">
        {state.next || state.total || 0}
      </div>
      <div className="divButtons">
        {buttons.map((btn) => (
          <Button clickHandler={handleClick} key={btn.id} value={btn} />
        ))}
      </div>
    </div>
  );
};

export default CalcUI;
