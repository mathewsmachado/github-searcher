import styled from 'styled-components';

import { render, s } from '.';

describe('customRender', () => {
  const Title = styled.h1`
    color: ${({ theme }) => theme.color.accent};
  `;

  it('should render the passed component', () => {
    render(<Title>Github Searcher</Title>);

    expect(s.getByRole('heading')).toHaveTextContent(/github searcher/i);
  });

  it('should provide to the passed component access to the global providers', () => {
    render(<Title>Github Searcher</Title>);

    expect(s.getByRole('heading')).toHaveStyle({ color: '#FF007F' });
  });

  it('should render the passed component wrapped by a div with a "data-testid" prop', () => {
    render(<Title>Github Searcher</Title>, 'wrapper');
    const wrapper = s.getByTestId('wrapper');

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        color: #FF007F;
      }

      <div
        data-testid="wrapper"
      >
        <h1
          class="c0"
        >
          Github Searcher
        </h1>
      </div>
    `);
    expect(wrapper.firstChild).toHaveTextContent(/github searcher/i);
  });
});
