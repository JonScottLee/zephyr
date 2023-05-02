import { FC } from 'react';

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
  additionalClasses?: string;
  size: ButtonSizes;
  disabled?: boolean;
  variant?: ButtonVariants;
};

const rootClasses =
  'py-3 px-4 font-medium tracking-tight uppercase transition ease-in-out disabled:opacity-50 disabled:pointer-events-none';

const variantClasses = {
  [ButtonVariants.PRIMARY]: 'button--primary',
  [ButtonVariants.SECONDARY]: 'button--secondary ',
  [ButtonVariants.TERTIARY]: 'button--tertiary',
};

const sizeClasses = {
  [ButtonSizes.SMALL]: 'text-sm',
  [ButtonSizes.MEDIUM]: 'text-md',
  [ButtonSizes.LARGE]: 'text-base',
};

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  additionalClasses = '',
  children,
  disabled = false,
  size = ButtonSizes.LARGE,
  variant = ButtonVariants.PRIMARY,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${rootClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${additionalClasses}`}
    >
      {children}
    </button>
  );
};
