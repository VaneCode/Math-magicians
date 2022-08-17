import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Testing component Home', () => {
  test('Render Home', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
