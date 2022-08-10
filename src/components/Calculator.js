/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class CalcUI extends React.Component {
  render() {
    return (
      <div className="divCalculator">
        <div className="divResult">0</div>
        <div className="divButtons">
          <button className="btnNumber" type="button">AC</button>
          <button className="btnNumber" type="button">+/-</button>
          <button className="btnNumber" type="button">%</button>
          <button className="btnOperation" type="button">+</button>

          <button className="btnNumber" type="button">7</button>
          <button className="btnNumber" type="button">8</button>
          <button className="btnNumber" type="button">9</button>
          <button className="btnOperation" type="button">x</button>

          <button className="btnNumber" type="button">4</button>
          <button className="btnNumber" type="button">5</button>
          <button className="btnNumber" type="button">6</button>
          <button className="btnOperation" type="button">-</button>

          <button className="btnNumber" type="button">1</button>
          <button className="btnNumber" type="button">2</button>
          <button className="btnNumber" type="button">3</button>
          <button className="btnOperation" type="button">+</button>

          <button className="btnNumber" type="button">0</button>
          <button className="btnNumber" type="button">.</button>
          <button className="btnOperation" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default CalcUI;
