import { FC } from 'react';
import cx from 'classnames';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type ButtonProps = {
  active?: boolean;
  additionalClasses?: string;
  size: ButtonSizes;
  disabled?: boolean;
  variant?: ButtonVariants;
};

const rootClasses = 'button py-3 px-4 tracking-tight uppercase transition ease-in-out';

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  active = false,
  additionalClasses = '',
  children,
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

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
