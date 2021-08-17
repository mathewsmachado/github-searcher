import { render, screen } from 'utils/tests';

import { darkBackground, disableArgTypes, StoryContainer } from '.';

describe('disableArgType', () => {
  it('should match the expected object', () => {
    expect(disableArgTypes(['as'])).toMatchObject({
      argTypes: { as: { table: { disable: true } } },
    });

    expect(disableArgTypes(['as', 'ref', 'theme'])).toMatchObject({
      argTypes: {
        as: { table: { disable: true } },
        ref: { table: { disable: true } },
        theme: { table: { disable: true } },
      },
    });

    expect(disableArgTypes(['as'], false)).toMatchObject({
      as: { table: { disable: true } },
    });

    expect(disableArgTypes(['as', 'ref', 'theme'], false)).toMatchObject({
      as: { table: { disable: true } },
      ref: { table: { disable: true } },
      theme: { table: { disable: true } },
    });
  });
});

describe('darkBackground', () => {
  it('should match the expected object', () => {
    expect(darkBackground()).toMatchObject({
      parameters: { backgrounds: { default: 'dark' } },
    });

    expect(darkBackground(false)).toMatchObject({
      backgrounds: { default: 'dark' },
    });
  });
});

describe('<StoryContainer />', () => {
  it('should render the passed children', () => {
    render(
      <StoryContainer>
        <h1>Github Searcher</h1>
      </StoryContainer>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render the story with the passed style', () => {
    render(
      <StoryContainer
        style={{ maxWidth: '50px', backgroundColor: 'rebeccapurple' }}
      >
        <h1>Github Searcher</h1>
      </StoryContainer>
    );

    expect(screen.getByRole('heading').parentElement).toHaveStyle({
      maxWidth: '50px',
      backgroundColor: 'rebeccapurple',
    });
  });
});
