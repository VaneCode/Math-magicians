import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Testing component Navbar', () => {
  test('Render Navbar', () => {
    const tree = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
