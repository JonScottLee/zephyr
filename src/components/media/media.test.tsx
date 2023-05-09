import { render, fireEvent } from '@testing-library/react';
import { Media } from './media';

describe('Media', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Media />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
