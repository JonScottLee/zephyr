import { render, fireEvent } from '@testing-library/react';
import { Select } from './select';

describe('Select', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(
      <Select label="Pick a number" items={['one', 'two', 'three']} />,
    );

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
