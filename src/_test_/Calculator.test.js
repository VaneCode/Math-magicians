import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalcUI from '../components/Calculator';

describe('Testing calculator container', () => {
  test('Render', () => {
    const tree = render(<CalcUI />);
    expect(tree).toMatchSnapshot();
  });

  test('User clicking', () => {
    render(<CalcUI />);
    const divResult = document.querySelector('.divResult');
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('5'));
    expect(divResult.textContent).toBe('15');
  });

  test('Addition', () => {
    render(<CalcUI />);
    const divResult = document.querySelector('.divResult');
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(divResult.textContent).toBe('8');
  });

  test('Substraction', () => {
    render(<CalcUI />);
    const divResult = document.querySelector('.divResult');
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(divResult.textContent).toBe('4');
  });

  test('Multiplication', () => {
    render(<CalcUI />);
    const divResult = document.querySelector('.divResult');
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(divResult.textContent).toBe('15');
  });

  test('Division', () => {
    render(<CalcUI />);
    const divResult = document.querySelector('.divResult');
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(divResult.textContent).toBe('3');
  });
});
