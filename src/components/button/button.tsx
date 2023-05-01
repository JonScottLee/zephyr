import { FC } from 'react';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type ButtonProps = {
  additionalClasses?: string;
  disabled?: boolean;
  variant?: ButtonVariants;
};

const rootClasses =
  'py-3 px-4 font-medium tracking-tight uppercase text-sm transition ease-in-out disabled:opacity-50 disabled:pointer-events-none';

const variantClasses = {
  [ButtonVariants.PRIMARY]: 'bg-primary-900 text-white hover:bg-primary-800',
  [ButtonVariants.SECONDARY]:
    'border-primary text-primary border-2 bg-transparent hover:border-transparent hover:bg-primary hover:text-white ',
};

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  additionalClasses = '',
  children,
  disabled = false,
  variant = ButtonVariants.PRIMARY,
}) => {
  return (
    <button disabled={disabled} className={`${rootClasses} ${variantClasses[variant]} ${additionalClasses}`}>
      {children}
    </button>
  );
};
