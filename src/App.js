/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CalcUI from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="divContainer">
        <CalcUI />
      </div>
    );
  }
}

export default App;
