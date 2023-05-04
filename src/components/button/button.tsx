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
  size = 'large',
  variant = 'primary',
}) => {
  const classes = cx(
    rootClasses,
    {
      'button--primary': variant === 'primary',
      'button--secondary': variant === 'secondary',
      'button--tertiary': variant === 'tertiary',
      'text-sm': size === 'small',
      'text-md': size === 'medium',
      'text-base': size === 'large',
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
