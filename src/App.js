/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    );
  }
}

export default App;
