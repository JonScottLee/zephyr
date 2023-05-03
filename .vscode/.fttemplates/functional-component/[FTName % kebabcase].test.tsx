import { render, fireEvent } from '@testing-library/react';
import { [FTName | pascalcase] } from './[FTName | kebabcase]';

describe('[FTName | capitalcase]', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<[FTName | pascalcase] />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
