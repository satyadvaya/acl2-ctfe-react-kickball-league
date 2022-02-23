import { render } from '@testing-library/react';
import Home from './Home';

it('should render a simple homepage', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
