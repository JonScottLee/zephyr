import { render, fireEvent } from '@testing-library/react';
import { Testimonial } from './testimonial';

describe('Testimonial', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Testimonial />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
