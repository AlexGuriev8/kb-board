import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Button from '.';

describe('Button component', () => {
  it('should render the component correctly', () => {
    const { container } = render(<Button>Test</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should render a disabled button if the disabled prop is true', () => {
    render(<Button disabled>+ Add New Task</Button>);

    const button = screen.getByRole('button', {
      name: /\+ add new task/i,
    });

    expect(button).toBeDisabled();
  });

  it('should render a button with the "primary" className', () => {
    const className = 'primary';

    render(
      <Button disabled className={className}>
        Test ClassName
      </Button>
    );

    const button = screen.getByRole('button', {
      name: /Test className/i,
    });

    expect(button).toHaveClass(className);
  });

  it('should call the click handler once', () => {
    const fn = vi.fn();
    render(<Button onClick={fn}>Click me</Button>);

    screen
      .getByRole('button', {
        name: /click me/i,
      })
      .click();

    expect(fn).toBeCalledTimes(1);
  });
});
