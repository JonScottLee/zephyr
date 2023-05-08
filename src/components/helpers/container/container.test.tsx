import { render, fireEvent } from '@testing-library/react';
import { Container } from './container';

describe('Container', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Container />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
