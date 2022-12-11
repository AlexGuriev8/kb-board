import { screen } from '@testing-library/react';

import useDeleteConfirmation from './useDeleteConfirmation';
import { render } from '../../__test-utils__/renderWithTheme';

describe('useDeleteConfirmation', () => {
  it('should render the delete confirmation modal', () => {
    const TestComponent = () => {
      const { renderDeleteModal } = useDeleteConfirmation({
        isOpen: true,
        toggle: () => {},
      });
      return renderDeleteModal();
    };

    render(<TestComponent />);

    const heading = screen.getByRole('heading', {
      name: /delete board/i,
    });
    const deleteButton = screen.getByRole('button', {
      name: /delete/i,
    });
    const cancelButton = screen.getByRole('button', {
      name: /cancel/i,
    });

    expect(heading).toHaveTextContent('Delete Board');
    expect(deleteButton).toHaveTextContent('Delete');
    expect(cancelButton).toHaveTextContent('Cancel');
  });
});
