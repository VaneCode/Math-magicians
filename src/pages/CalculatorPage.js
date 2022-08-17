import React from 'react';
import CalcUI from '../components/Calculator';
import '../styles/pages.css';

const CalculatorPage = () => (
  <section className="sectionCalc">
    <h2 className="titlePage">Let&apos;s do some math!</h2>
    <CalcUI />
  </section>
);

export default CalculatorPage;
