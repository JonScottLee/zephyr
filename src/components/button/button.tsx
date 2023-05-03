import { FC } from 'react';
import cx from 'classnames';
import { ButtonVariants, ButtonSizes } from './button.constants';

type ButtonProps = {
  active?: boolean;
  additionalClasses?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSizes;
  variant?: ButtonVariants;
};

const rootClasses = 'button py-3 px-4 tracking-tight uppercase transition ease-in-out';

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  active = false,
  additionalClasses = '',
  children,
  onClick,
  disabled = false,
  size = ButtonSizes.LARGE,
  variant = ButtonVariants.PRIMARY,
}) => {
  const classes = cx(
    rootClasses,
    {
      'button--primary': variant === ButtonVariants.PRIMARY,
      'button--secondary': variant === ButtonVariants.SECONDARY,
      'button--tertiary': variant === ButtonVariants.TERTIARY,
      'text-sm': size === ButtonSizes.SMALL,
      'text-md': size === ButtonSizes.MEDIUM,
      'text-base': size === ButtonSizes.LARGE,
      'opacity-50 pointer-events-none': disabled,
      'button--active': active,
    },
    additionalClasses,
  );

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button onClick={onButtonClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
