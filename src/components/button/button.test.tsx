import { render, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Button />);

    // Assert
    expect(baseElement).toBeTruthy();
  });

  it('should call onClick when clicked', () => {
    // Arrange
    const onClick = jest.fn();
    const buttonText = 'Button';
    const { getByText } = render(<Button onClick={onClick}>{buttonText}</Button>);
    const button = getByText(buttonText);

    // Act
    fireEvent.click(button);

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick when disabled', () => {
    // Arrange
    const onClick = jest.fn();
    const buttonText = 'Button';
    const { getByText } = render(
      <Button disabled onClick={onClick}>
        {buttonText}
      </Button>,
    );
    const button = getByText(buttonText);

    // Act
    fireEvent.click(button);

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });
});
