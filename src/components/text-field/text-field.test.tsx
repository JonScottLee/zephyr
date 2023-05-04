import { render, fireEvent } from '@testing-library/react';
import { TextField } from './text-field';

describe('Text Field', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<TextField id="foo" />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
