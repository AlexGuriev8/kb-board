import user from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { render } from '../../__test-utils__/renderWithTheme';
import Modal from '.';

describe('Modal', () => {
  it('should render the children when isOpen is true', () => {
    const onOpen = vi.fn();

    const { getByText } = render(
      <Modal isOpen toggle={onOpen}>
        Modal is Open
      </Modal>
    );
    expect(getByText('Modal is Open')).toBeInTheDocument();
  });

  it('should not render the children when isOpen is false', () => {
    const onOpen = vi.fn();

    const { queryByText } = render(
      <Modal isOpen={false} toggle={onOpen}>
        Should not render
      </Modal>
    );
    expect(queryByText('Should not render')).not.toBeInTheDocument();
  });

  it('should call the toggle function when clicked outside of the modal content', async () => {
    const toggle = vi.fn();

    render(
      <Modal isOpen toggle={toggle}>
        Content
      </Modal>
    );

    await user.click(screen.getByTestId('modal-container'));
    expect(toggle).toHaveBeenCalled();
  });

  it('should not render the children when isOpen is false', () => {
    const toggle = vi.fn();

    const { queryByText } = render(
      <Modal isOpen={false} toggle={toggle}>
        Text
      </Modal>
    );
    expect(queryByText('Text')).not.toBeInTheDocument();
  });

  it('should call the toggle function when the Escape key is pressed', () => {
    const toggle = vi.fn();

    render(<Modal isOpen toggle={toggle} />);

    user.keyboard('{Escape}');
    expect(toggle).toHaveBeenCalled();
  });

  it('should not call the toggle function when a non-Escape key is pressed', () => {
    const toggle = vi.fn();

    render(<Modal isOpen toggle={toggle} />);

    user.keyboard('{Enter}');
    expect(toggle).not.toHaveBeenCalled();
  });
});
