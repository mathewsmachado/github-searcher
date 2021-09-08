import { render, s } from 'utils/tests';

import { SearchInput } from '.';

it('should render a single input by default', () => {
  render(<SearchInput inputOne={{ placeholder: 'one' }} />, 'wrapper');

  expect(s.getByRole('textbox')).toHaveAttribute('placeholder', 'one');
  expect(s.getByTitle(/search/i)).toBeInTheDocument();
  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    display: 'flex',
    alignItems: 'center',
    maxWidth: '53rem',
  });
});

it('should render a double input', () => {
  render(
    <SearchInput
      type='double'
      inputOne={{ placeholder: 'one' }}
      inputTwo={{ placeholder: 'two' }}
    />,
    'wrapper'
  );

  expect(s.getByPlaceholderText(/one/i)).toBeInTheDocument();
  expect(s.getByPlaceholderText(/two/i)).toBeInTheDocument();
  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    display: 'flex',
    alignItems: 'center',
    maxWidth: '53rem',
  });
});

it('should render a double composed input', () => {
  render(
    <SearchInput
      type='doubleComposed'
      inputOne={{ placeholder: 'one' }}
      inputTwo={{ placeholder: 'two' }}
      inputThree={{ placeholder: 'three' }}
      inputFour={{ placeholder: 'four' }}
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
