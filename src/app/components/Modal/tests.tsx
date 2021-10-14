import { useState } from 'react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import { theme } from 'app/styles';
import { setModalRoot, unsetModalRoot } from 'app/utils/dom';
import { render, s } from 'app/utils/tests';

import { Modal } from '.';

const MockedComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <h1>Github Searcher</h1>
      </Modal>
      <button type='button' onClick={() => setIsModalOpen(true)}>
        Open
      </button>
    </>
  );
};

beforeAll(() => setModalRoot());

afterAll(() => unsetModalRoot());

it('should render all the items correctly', () => {
  render(<MockedComponent />);

  const wrapper = document.getElementById('modal-root')!.firstChild;
  const overlay = wrapper?.firstChild;
  const card = wrapper?.lastChild;
  const closeButton = s.getByTitle(/close/i);
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
  expect(closeButton).toBeInTheDocument();
  expect(content).toHaveTextContent(/github searcher/i);
});

it('should close if the overlay is clicked', () => {
  render(<MockedComponent />);
  const overlay = document.getElementById('modal-root')!.firstChild
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
