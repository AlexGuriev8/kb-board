import React from 'react';
import { screen } from '@testing-library/react';
import Input from '.';
import { render } from '../../__test-utils__/renderWithTheme';

describe('Input', () => {
  it('should render the component correctly', () => {
    const { container } = render(
      <Input
        name="test"
        label="Test Input"
        value="Test Value"
        onChange={() => {}}
        placeholder="Test Placeholder"
        className="test-class"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the input field with the correct props', () => {
    render(
      <Input
        name="test"
        label="Test Input"
        value="Test Value"
        onChange={() => {}}
        placeholder="Test Placeholder"
        className="test-class"
      />
    );
    const input = screen.getByTestId('input-element');

    expect(input).toHaveAttribute('id', 'test');
    expect(input).toHaveAttribute('value', 'Test Valu');
    expect(input).toHaveAttribute('placeholder', 'Test Placeholder');
    expect(input).toHaveAttribute('name', 'test');
  });
});
