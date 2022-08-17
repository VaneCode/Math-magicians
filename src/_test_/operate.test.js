import operate from '../logic/operate';

describe('Testing function operate', () => {
  test('Operation addition', () => {
    expect(operate(12.5, 34, '+')).toBe('46.5');
  });

  test('Operation substraction', () => {
    expect(operate(18, 5, '-')).toBe('13');
  });

  test('Operation multiplication', () => {
    expect(operate(15, 3, 'x')).toBe('45');
  });

  test('Operation multiplication', () => {
    expect(operate(1, 10, 'x')).toBe('10');
  });

  test('Operation multiplication', () => {
    expect(operate(2, 0, 'x')).toBe('0');
  });

  test('Operation division', () => {
    expect(operate(30, 5, '÷')).toBe('6');
  });

  test('Operation division', () => {
    expect(operate(30, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('Operation remainder', () => {
    expect(operate(20, 3, '%')).toBe('2');
  });

  test('Operation remainder', () => {
    expect(operate(20, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Unknown operation', () => {
    try {
      operate(123, 23.4, '(');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
