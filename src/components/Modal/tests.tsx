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
      <Modal
        modalOneContent={<h1>The first</h1>}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </>
  );
};

describe('<Modal />', () => {
  it('should render a single modal with a close button by default', () => {
    render(
      <Modal
        modalOneContent={<h1>Github Searcher</h1>}
        onClose={() => {}}
        isOpen
      />,
      'wrapper'
    );

    const overlay = screen.getByTestId(/wrapper/i).firstChild;
    const contentWrapper = overlay?.firstChild;
    const closeButton = screen.getByRole('button');
    const content = screen.getByRole('heading');

    expect(overlay?.childNodes).toHaveLength(1);
    expect(overlay).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      minHeight: '100vh',
    });
    expect(contentWrapper).toHaveStyle({
      position: 'relative',
      maxWidth: '70rem',
      width: '100%',
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

    const overlay = screen.getByTestId(/wrapper/i).firstChild;
    const contentWrapperOne = overlay?.firstChild;
    const contentWrapperTwo = overlay?.lastChild;
    const vsSeparator = screen.getByTitle(/vs/i);
    const closeButtons = screen.getAllByRole('button');
    const contents = screen.getAllByRole('heading');

    expect(overlay?.childNodes).toHaveLength(3);
    expect(contentWrapperOne).toBeInTheDocument();
    expect(contentWrapperTwo).toBeInTheDocument();
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

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
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
