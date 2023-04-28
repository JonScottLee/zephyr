import { FC } from 'react';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type ButtonProps = {
  variant?: ButtonVariants;
};

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  variant = ButtonVariants.PRIMARY,
}) => {
  const rootClasses = 'py-2 px-4 rounded uppercase text-sm';

  const variantClasses = {
    [ButtonVariants.PRIMARY]: 'bg-primary-500 text-black hover:text-white',
    [ButtonVariants.SECONDARY]:
      'border border-primary bg-transparent hover:border-transparent hover:bg-primary-500 hover:text-white ',
  };

  return (
    <button className={`${rootClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};
