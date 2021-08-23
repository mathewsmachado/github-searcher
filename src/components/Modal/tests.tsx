import { useState } from 'react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { Modal } from '.';

const MockedComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button type='button' onClick={() => setIsModalOpen(true)}>
        Open
      </button>
      <Modal onModalClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <h1>Github Searcher</h1>
      </Modal>
    </>
  );
};

describe('<Modal />', () => {
  it('should render the passed children', () => {
    render(
      <Modal onModalClose={() => {}} isOpen>
        <h1>Github Searcher</h1>
      </Modal>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/github/i);
  });

  it('should render a full screen overlay and a centered content wrapper', () => {
    render(
      <Modal onModalClose={() => {}} isOpen>
        <h1>Github Searcher</h1>
      </Modal>,
      'wrapper'
    );

    const overlay = screen.getByTestId(/wrapper/i).firstChild;
    const contentWrapper = overlay?.firstChild;

    expect(overlay).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    });
    expect(contentWrapper).toBeInTheDocument();
  });

  it('should render the content wrapper occupying almost the whole screen in medium screens ', () => {
    render(
      <Modal onModalClose={() => {}} isOpen>
        <h1>Github Searcher</h1>
      </Modal>
    );
    const contentWrapper = screen.getByRole('button').parentElement;

    expect(contentWrapper).toHaveStyle({
      width: '60rem',
      height: '50rem',
    });
    expect(contentWrapper).toHaveStyleRule('width', '90vw', {
      media: theme.media.breakpoints('below', 'medium'),
    });
    expect(contentWrapper).toHaveStyleRule('height', '90vh', {
      media: theme.media.breakpoints('below', 'medium'),
    });
  });

  it('should close if the overlay is clicked', () => {
    render(<MockedComponent />);
    const openButton = screen.getByRole('button', { name: /open/i });
    const overlay = openButton.nextElementSibling;

    expect(overlay).not.toBeVisible();

    userEvent.click(openButton);

    expect(overlay).toBeVisible();

    userEvent.click(overlay as TargetElement);

    expect(overlay).not.toBeVisible();
  });

  it('should close if the close button is clicked', () => {
    render(<MockedComponent />);
    const openButton = screen.getByRole('button', { name: /open/i });
    const closeButton = screen.getByRole('button', { name: /close/i });

    expect(closeButton).not.toBeVisible();

    userEvent.click(openButton);

    expect(closeButton).toBeVisible();

    userEvent.click(closeButton);

    expect(closeButton).not.toBeVisible();
  });

  it('should not close if the content wrapper is clicked', () => {
    render(<MockedComponent />);
    const openButton = screen.getByRole('button', { name: /open/i });
    const contentWrapper = screen.getByRole('button', {
      name: /close/i,
    }).parentElement;

    expect(contentWrapper).not.toBeVisible();

    userEvent.click(openButton);

    expect(contentWrapper).toBeVisible();

    userEvent.click(contentWrapper as TargetElement);

    expect(contentWrapper).toBeVisible();
  });
});
