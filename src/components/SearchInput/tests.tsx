import { render, screen } from 'utils/tests';

import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('should render a single input by default', () => {
    render(<SearchInput inputOne={{ placeholder: 'one' }} />, 'wrapper');

    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'one');
    expect(screen.getByTitle(/search/i)).toBeInTheDocument();
    expect(screen.getByTestId(/wrapper/i).firstChild).toHaveStyle({
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

    expect(screen.getByPlaceholderText(/one/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/two/i)).toBeInTheDocument();
    expect(screen.getByTestId(/wrapper/i).firstChild).toHaveStyle({
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

    expect(screen.getByPlaceholderText(/one/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/two/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/three/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/four/i)).toBeInTheDocument();
    expect(screen.getByTestId(/wrapper/i).firstChild).toHaveStyle({
      flexDirection: 'column',
    });
  });

  it("should throw an error if the passed inputs don't match the passed type", () => {
    jest.spyOn(console, 'error').mockReturnValue();

    expect(() =>
      render(<SearchInput type='single' inputOne={{}} inputTwo={{}} />)
    ).toThrow();

    expect(() =>
      render(
        <SearchInput
          type='double'
          inputOne={{}}
          inputTwo={{}}
          inputThree={{}}
        />
      )
    ).toThrow();

    expect(() => render(<SearchInput type='double' inputOne={{}} />)).toThrow();

    expect(() =>
      render(
        <SearchInput
          type='doubleComposed'
          inputOne={{}}
          inputTwo={{}}
          inputThree={{}}
        />
      )
    ).toThrow();
  });
});
