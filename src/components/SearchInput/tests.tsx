import { render, s } from 'utils/tests';

import { SearchInput } from '.';

it('should render a single input by default', () => {
  render(<SearchInput inputsData={[{ placeholder: 'one' }]} />, 'wrapper');

  expect(s.getByRole('textbox')).toHaveAttribute('placeholder', 'one');
  expect(s.getByTitle(/search/i)).toBeInTheDocument();
  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    display: 'flex',
    alignItems: 'center',
  });
});

it('should render a double input', () => {
  render(
    <SearchInput
      inputsData={[{ placeholder: 'one' }, { placeholder: 'two' }]}
    />,
    'wrapper'
  );

  expect(s.getByPlaceholderText(/one/i)).toBeInTheDocument();
  expect(s.getByPlaceholderText(/two/i)).toBeInTheDocument();
  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    display: 'flex',
    alignItems: 'center',
  });
});

it('should render a double composed input', () => {
  render(
    <SearchInput
      inputsData={[
        { placeholder: 'one' },
        { placeholder: 'two' },
        { placeholder: 'three' },
        { placeholder: 'four' },
      ]}
    />,
    'wrapper'
  );

  expect(s.getByPlaceholderText(/one/i)).toBeInTheDocument();
  expect(s.getByPlaceholderText(/two/i)).toBeInTheDocument();
  expect(s.getByPlaceholderText(/three/i)).toBeInTheDocument();
  expect(s.getByPlaceholderText(/four/i)).toBeInTheDocument();
  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    flexDirection: 'column',
  });
});
