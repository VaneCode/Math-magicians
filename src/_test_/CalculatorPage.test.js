import { render } from '@testing-library/react';
import CalculatorPage from '../pages/CalculatorPage';

describe('Testing component Calculator page', () => {
  test('Render CalculatorPage', () => {
    const tree = render(<CalculatorPage />);
    expect(tree).toMatchSnapshot();
  });
});
