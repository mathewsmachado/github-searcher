import { css } from 'styled-components';

type Constraint = 'max' | 'min' | 'none';

type Justify =
  | 'baseline'
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';

type Align = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

type Direction = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export function fullscreen(constraint: Constraint = 'none') {
  const mapper = {
    max: css`
      max-width: 100vw;
      max-height: 100vh;
    `,
    min: css`
      min-width: 100vw;
      min-height: 100vh;
    `,
    none: css`
      width: 100vw;
      height: 100vh;
    `,
  };

  return mapper[constraint];
}

export function flexContainer(
  justify: Justify = 'center',
  align: Align = 'center',
  direction: Direction = 'column'
) {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `;
}
