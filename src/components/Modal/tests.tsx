import { useState } from 'react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import { theme } from 'styles/theme';
import { render, s } from 'utils/tests';

import { Modal } from '.';

const MockedComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        modalOneContent={<h1>The first</h1>}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
      <button type='button' onClick={() => setIsModalOpen(true)}>
        Open
      </button>
    </>
  );
};

it('should render a single modal with a close button by default', () => {
  render(
    <Modal
      modalOneContent={<h1>Github Searcher</h1>}
      onClose={() => {}}
      isOpen
    />,
    'wrapper'
  );

  const wrapper = s.getByTestId(/wrapper/i).firstChild;
  const overlay = wrapper?.firstChild;
  const card = wrapper?.lastChild;
  const closeButton = s.getByRole('button');
  const content = s.getByRole('heading');

  expect(wrapper?.childNodes).toHaveLength(2);
  expect(overlay).toBeInTheDocument();
  expect(wrapper).toHaveStyleRule('display', 'flex');
  expect(wrapper).toHaveStyleRule('align-items', 'center');
  expect(wrapper).toHaveStyleRule('justify-content', 'center');
  expect(card).toHaveStyle({
    position: 'relative',
    maxWidth: '70rem',
    width: '100%',
    zIndex: theme.layer.modal,
  });
  expect(closeButton).toHaveStyle({
    position: 'absolute',
    right: theme.spacing.xsmall,
  });
  expect(content).toHaveTextContent(/github searcher/i);
});

it('should render a double modal', () => {
  render(
    <Modal
      modalOneContent={<h1>The first</h1>}
      modalTwoContent={<h1>The second</h1>}
      type='double'
      onClose={() => {}}
      isOpen
    />,
    'wrapper'
  );

  const wrapper = s.getByTestId(/wrapper/i).firstChild;
  const overlay = wrapper?.firstChild;
  const closeButtons = s.getAllByRole('button');
  const cardOne = closeButtons[0].parentElement;
  const cardTwo = closeButtons[1].parentElement;
  const vsSeparator = s.getByTitle(/vs/i);
  const contents = s.getAllByRole('heading');

  expect(wrapper?.childNodes).toHaveLength(4);
  expect(wrapper).toHaveStyleRule('flex-direction', 'column', {
    media: theme.media.breakpoints('below', 'medium'),
  });
  expect(overlay).toBeInTheDocument();
  expect(cardOne).toBeInTheDocument();
  expect(cardTwo).toBeInTheDocument();
  expect(vsSeparator).toBeInTheDocument();
  expect(closeButtons).toHaveLength(2);
  expect(contents[0]).toHaveTextContent(/the first/i);
  expect(contents[1]).toHaveTextContent(/the second/i);
});

it('should render a version without a close button', () => {
  render(
    <Modal
      modalOneContent={<h1>The first</h1>}
      onClose={() => {}}
      isOpen
      closeButton={false}
    />
  );

  expect(s.queryByRole('button')).not.toBeInTheDocument();
});

it('should close if the overlay is clicked', () => {
  render(<MockedComponent />, 'wrapper');
  const overlay = s.getByTestId('wrapper').firstChild
    ?.firstChild as TargetElement;
  const openButton = s.getByRole('button', { name: /open/i });

  expect(overlay).not.toBeVisible();

  userEvent.click(openButton);

  expect(overlay).toBeVisible();

  userEvent.click(overlay);

  expect(overlay).not.toBeVisible();
});

it('should close if the close button is clicked', () => {
  render(<MockedComponent />);
  const openButton = s.getByRole('button', { name: /open/i });
  const closeButton = s.getByRole('button', { name: /close/i });

  expect(closeButton).not.toBeVisible();

  userEvent.click(openButton);

  expect(closeButton).toBeVisible();

  userEvent.click(closeButton);

  expect(closeButton).not.toBeVisible();
});

it('should not close if the card is clicked', () => {
  render(<MockedComponent />);
  const openButton = s.getByRole('button', { name: /open/i });
  const card = s.getByRole('button', {
    name: /close/i,
  }).parentElement as TargetElement;

  expect(card).not.toBeVisible();

  userEvent.click(openButton);

  expect(card).toBeVisible();

  userEvent.click(card);

  expect(card).toBeVisible();
});
