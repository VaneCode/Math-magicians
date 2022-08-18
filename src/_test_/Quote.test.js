import { render } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Testing component Quote', () => {
  test('Render Quote', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
