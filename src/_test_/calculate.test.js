import { calculate, isNumber } from '../logic/calculate';

describe('Testing function isNumber', () => {
  test('Input is a number', () => {
    expect(isNumber('5')).toBe(true);
  });

  test('Input is not a number', () => {
    expect(isNumber('d')).toBe(false);
  });
});

describe('Testing function calculate', () => {
  test('buttonName === +', () => {
    const buttonName = '+';
    const obj = {
      total: '4',
      next: '4',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('8');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('buttonName === -', () => {
    const buttonName = '-';
    const obj = {
      total: '124',
      next: '254',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('-130');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('buttonName === x', () => {
    const buttonName = 'x';
    const obj = {
      total: '2.5',
      next: '2',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('5');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('buttonName === ÷', () => {
    const buttonName = '÷';
    const obj = {
      total: '146',
      next: '74',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('1.97297297297297297297');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('buttonName === ÷, divide to 0', () => {
    const buttonName = '÷';
    const object = {
      total: '34',
      next: '0',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe("Can't divide by 0.");
    expect(calculate(object, buttonName).next).toBeNull();
    expect(calculate(object, buttonName).operation).toBe('÷');
  });

  test('buttonName === =', () => {
    const buttonName = '=';
    const object = {
      total: '8',
      next: '6',
      operation: '%',
    };
    expect(calculate(object, buttonName).total).toBe('2');
    expect(calculate(object, buttonName).next).toBeNull();
    expect(calculate(object, buttonName).operation).toBeNull();
  });

  test('buttonName === AC', () => {
    const buttonName = 'AC';
    const object = {
      total: '2343.233',
      next: '122',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBeNull();
    expect(calculate(object, buttonName).next).toBeNull();
    expect(calculate(object, buttonName).operation).toBeNull();
  });

  test('buttonName === .', () => {
    const buttonName = '.';
    const object = {
      total: '0',
      next: '5',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe('0');
    expect(calculate(object, buttonName).next).toBe('5.');
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('buttonName === +/-', () => {
    const buttonName = '+/-';
    const object = {
      total: '-1',
      next: '-2',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe('-1');
    expect(calculate(object, buttonName).next).toBe('2');
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });
});
