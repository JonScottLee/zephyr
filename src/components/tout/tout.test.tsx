import { render, fireEvent } from '@testing-library/react';
import { Tout } from './tout';

describe('Tout', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Tout />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
